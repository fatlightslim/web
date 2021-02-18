const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')//process.env.SENDGRID_API_KEY)
const msg = {
  to: 'masataka.abiru@gmail.com', // Change to your recipient
  from: 'hello@sbo.llc', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })