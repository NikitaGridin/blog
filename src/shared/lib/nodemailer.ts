'use server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  auth: {
    user: 'aruisialalin',
    pass: 'szeilgnqfhkuiezk',
  },
})

export const sendEmail = async ({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}): Promise<void> => {
  try {
    const info = await transporter.sendMail({
      from: 'aruisialalin@yandex.ru',
      to: to,
      subject: subject,
      html: html,
    })
    console.log('Email sent:', info.response)
  } catch (error: any) {
    console.log('Error occurred:', error.message)
  }
}
