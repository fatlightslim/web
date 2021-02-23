
import { fetchPostJSON } from "../../utils/api-helpers"
// fetchPostJSON('/api/orders', )
import { buffer } from "micro"
import Cors from "micro-cors"
const cors = Cors({
  allowMethods: ["POST", "HEAD"],
})

const stripe = require("stripe")("sk_test_FexbqIZUfPreFhwr7BIWaRw4") //(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET
// Stripe requires the raw body to construct the event.
export const config = {
  api: {
    bodyParser: false,
  },
}

const fulfillOrder = (session) => {
  // Sending the customer a receipt email.
  // console.log("Fulfilling order", session)
  fetchPostJSON(`${session.cancel_url}api/orders`, {
    _id: session.client_reference_id,
    payment: session,
    status: "paid",
  }).then((r) => {
    console.log("Fulfilled")
  })

  // mailgun
}

const createOrder = (session) => {
  // Saving a copy of the order in your own database.
  // console.log("Creating order", session)
  fetchPostJSON(`${session.cancel_url}api/orders`, {
    _id: session.client_reference_id,
    payment: session,
    status: "awaiting_payment",
  }).then((r) => {
    console.log("awaiting_payment")
  })
}

const emailCustomerAboutFailedPayment = (session) => {
  // TODO: fill me in
  console.log("Emailing customer", session)
  const status = "payment_failed"
}

async function handler(req, res) {
  if (req.method === "POST") {
    const payload = await buffer(req)
    const sig = req.headers["stripe-signature"]

    let event

    try {
      event = stripe.webhooks.constructEvent(
        payload.toString(),
        sig,
        endpointSecret
      )
    } catch (err) {
      // console.log(`❌ Error message: ${err.message}`)
      return res.status(400).send(`Webhook Error: ${err.message}`)
    }

    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object
        // Save an order in your database, marked as 'awaiting payment'
        createOrder(session)

        // Check if the order is paid (e.g., from a card payment)
        //
        // A delayed notification payment will have an `unpaid` status, as
        // you're still waiting for funds to be transferred from the customer's
        // account.
        if (session.payment_status === "paid") {
          fulfillOrder(session)
        }

        break
      }

      case "checkout.session.async_payment_succeeded": {
        const session = event.data.object

        // Fulfill the purchase...
        fulfillOrder(session)

        break
      }

      case "checkout.session.async_payment_failed": {
        const session = event.data.object

        // Send an email to the customer asking them to retry their order
        emailCustomerAboutFailedPayment(session)

        break
      }
    }
    // res.status(200)
    res.json({ received: true })
  } else {
    res.setHeader("Allow", "POST")
    res.status(405).end("Method Not Allowed")
  }
}

export default cors(handler)