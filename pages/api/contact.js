// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, transporter } from "@/config/nodemailer"

const handler = async (req, res) => {
  const emailFrom = process.env.NODEMAILER_EMAIL
  if (req.method === "POST") {
    const { subject, description, emailTo } = req.body
    if (!subject || !description) {
      return res.status(400).json({ message: "Bad request" })
    }
    try {
      await transporter.sendMail({
        from: emailFrom,
        to: emailTo,
        subject,
        text: description,
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      console.log(error)
      return res.status(400).json({ message: error.message })
    }
  }
  return res.status(400).json({ message: "Bad request" })
}

export default handler
