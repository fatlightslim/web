// const sgMail = require("@sendgrid/mail")
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// export default async function handler(req, res) {
//   const { to, from, subject, html } = req.body

//   return new Promise((resolve, reject) => {
//     sgMail
//       .send({
//         to,
//         from: process.env.EMAIL, // Change to your verified sender
//         subject,
//         html: "<strong>and easy to do anywhere, even with Node.js</strong>",
//       })
//       .then(() => {
//         return resolve()
//       })
//       .catch((error) => {
//         console.error(error)
//         reject(error)
//       })
//   })
// }
