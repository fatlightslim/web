import { connectToDatabase } from "../../../utils/mongodb"
import { ObjectId } from "mongodb"
import Cors from "micro-cors"
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
})

async function handler(req, res) {
  const { db } = await connectToDatabase()
  switch (req.method) {
    // case "DELETE":
    //   return del()
    case "GET":
      return res.json(await db.collection("orders").find({}).sort({_ts: -1}).toArray())
    // case "PATCH":
    //   return patch()
    // case "PUT":
    //   return put()
    case "POST":
      return await post()
    default:
      res.setHeader("Allow", "POST")
      res.status(405).end("Method Not Allowed")
  }

  async function post() {
    const { _id, status, ...rest } = req.body
    const _ts = new Date()

    db.collection("orders").findOneAndUpdate(
      { _id: ObjectId(_id) }, // generate new ObjectId if _id is undefined == new post
      {
        $set: {
          ...rest,
          _ts,
        },
        $push: {
          log: {
            status,
            _ts,
          },
        },
      },
      { upsert: true, returnOriginal: false },
      (err, r) => {
        if (err) console.log(err)
        sendMail({
          _id: r.value._id.toString(), // NOTICE: returned _id is not String but Object
          status,
          to: r.value.customer.email,
        })
          .then((x) => {
            res.json(r.value)
          })
          .catch((err) => {
            res.json(err)
          })
      }
    )
  }

  async function sendMail({ _id, status, to }) {
    return new Promise((resolve, reject) => {
      const order_id = _id.substr(18).toUpperCase()
      const data = {
        sent_order_confirm: {
          subject: `${process.env.site.name} ご注文の確認 #${order_id}`,
          template: "d-5da79b6010c642cab0c6483d95f161e2",
        },
        sent_shipping: {
          subject: `${process.env.site.name} ご注文の商品(${order_id})が発送されました`,
          template: "d-6410e5d78a16446dab36463a37ad6210"
        },

        sent_failure: {
          subject: `重要なお知らせ: ${process.env.site.name} のご注文について ${order_id} `,
          template: "d-9f5e67f4369e4a9eaa6ed0f5b4b72bb9"
        },
      }
      let statusToPush
      if (["paid", "cod"].includes(status)) {
        statusToPush = "sent_order_confirm"
      } else if (status === "shipping") {
        statusToPush = "sent_shipping"
      } else if (status === "payment_failed") {
        statusToPush = "sent_failure"
      } else {
        resolve()
      }

      sgMail
        .send({
          to,
          bcc: "yokosuka@gmail.com",
          from: process.env.EMAIL,
          subject: data[statusToPush].subject,
          templateId: data[statusToPush].template,
          dynamicTemplateData: {},
        })
        .then(() => {
          db.collection("orders").findOneAndUpdate(
            { _id: ObjectId(_id) },
            {
              $push: {
                log: {
                  status: statusToPush,
                  _ts: new Date(),
                },
              },
            },
            { upsert: true, returnOriginal: false },
            (err, r) => {
              if (err) console.log(err)
              resolve(r)
            }
          )
        })
        .catch((error) => {
          console.error(error)
          reject(error)
        })
    })
  }
}

// const schema = {
//   _id: ObjectId,
//   _ts: DateTime, // A.K.A updatedAt. createdAt is supposed to be extracted from _id. ObjectId.getTimestamp().
//   items: Array, // line items from contentful and qty. {{ product: { fields, sys }}, qty: 1 }
//   status: Array [
//     {status: "cod", _ts: new Date() }
//   ], // ['cod', 'awaiting_payment', 'paid', 'sent_failure', 'done', 'shipping', 'sent_order_confirm', 'sent_shipping', 'payment_failed']
//   customer: {
//     name: String,
//     email: String,
//     addr1: String,
//     addr2: String,
//     zip: String,
//     pref: String,
//     country: String,
//     tel: String,
//   },
//   payment: { // response from Stripe
//     id: 'cs_test_a17X5ihg0rafVrZckbTgfF0d95Ym0pLGQgmvqcMO6JJ32QAMfj4UK7nwqf',
//     object: 'checkout.session',
//     allow_promotion_codes: null,
//     amount_subtotal: 169600,
//     amount_total: 169600,
//     billing_address_collection: null,
//     cancel_url: 'http://localhost:3000/',
//     client_reference_id: null,
//     currency: 'jpy',
//     customer: 'cus_IsJ1FD0v2q6Wjj',
//     customer_details: {
//       email: 'masataka.abiru@gmail.com',
//       tax_exempt: 'none',
//       tax_ids: []
//     },
//     customer_email: 'masataka.abiru@gmail.com',
//     livemode: false,
//     locale: null,
//     metadata: {},
//     mode: 'payment',
//     payment_intent: 'pi_1IGYPY2clWuDaPHqfYH7t5It',
//     payment_method_types: [ 'card' ],
//     payment_status: 'paid',
//     setup_intent: null,
//     shipping: null,
//     shipping_address_collection: null,
//     submit_type: null,
//     subscription: null,
//     success_url: 'http://localhost:3000/order/success?session_id={CHECKOUT_SESSION_ID}',
//     total_details: { amount_discount: 0, amount_tax: 0 }
//   }
// }

export default cors(handler)
