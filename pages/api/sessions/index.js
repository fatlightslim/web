
const stripe = require("stripe")("sk_test_FexbqIZUfPreFhwr7BIWaRw4") //(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  const { customer_email, line_items, url, client_reference_id } = req.body

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    customer_email,
    client_reference_id,
    line_items,
    mode: "payment",
    success_url: url + "/order/success?session_id={CHECKOUT_SESSION_ID}",
    cancel_url: url,
  })

  res.json({ id: session.id })
}
