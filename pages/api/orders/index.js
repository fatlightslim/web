import { connectToDatabase } from "../../../utils/mongodb"
import { ObjectId } from "mongodb"

export default async function handler(req, res) {
  const { db } = await connectToDatabase()
  switch (req.method) {
    // case "DELETE":
    //   return del()
    // case "GET":
    //   return get()
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
    const update = {
      $set: {
        ...rest,
        _ts: new Date(),
      },
    }
    if (status) {
      update["$push"] = {
        status: {
          status,
          _ts: new Date(),
        },
      }
    }

    db.collection("orders").findOneAndUpdate(
      { _id: ObjectId(_id) },
      update,
      { upsert: true, returnOriginal: false },
      (err, r) => {
        if (err) console.log(err)
    console.log(r)
        res.json(r.value)
      }
    )
  }
}

// const schema = {
//   _id: ObjectId,
//   _ts: DateTime, // A.K.A updatedAt. createdAt is supposed to be extracted from _id. ObjectId.getTimestamp().
//   items: Array, // line items from contentful and qty. {{ product: { fields, sys }}, qty: 1 }
//   status: String, // payment status based on webhook from Stripe
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
