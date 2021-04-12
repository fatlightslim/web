const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

import nc from "next-connect"
var multer = require("multer")
var upload = multer()
export const config = {
  api: {
    bodyParser: false,
  },
}
const handler = nc()
  .use(upload.none())
  .post((req, res) => {
    const { from, subject, text, html } = req.body
    sgMail
      .send({
        to: "fatlightslim@gmail.com",
        from: "hello@fatlightslim.com",
        cc: from,
        subject,
        text,
        html,
      })
      .then(
        () => {},
        (error) => {
          console.error(error)

          if (error.response) {
            console.error(error.response.body)
          }

          res.json("done")
        }
      )
  })

export default handler
