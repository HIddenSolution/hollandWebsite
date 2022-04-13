const nodemailer = require("nodemailer")

const isDev = process.env.NODE_ENV === "development"

// This function runs when a HTTP request is made
// to /api/contact.

export default (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "colshacol@gmail.com",
      pass: "Rokkibeats1!",
    },
  })

  const mailOptions = {
    from: req.body.emailAddress,
    to: isDev ? "1990colton@gmail.com" : "Hollandrc.llc@gmail.com",
    subject: "New Contact Form Submission",
    text: `From: ${req.body.firstName} ${req.body.lastName}\n\n${req.body.message}`,
  }

  transporter.sendMail(mailOptions, function (error, info) {
    const data = error || info.response
    console.log("Done sending email:", data)

    res.status(200).json({
      success: true,
    })
  })
}