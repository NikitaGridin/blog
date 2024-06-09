'use server'
import { createUser } from '@/entities/user/actions/create-user'
import { db } from '@/shared/lib/db'
import { sendEmail } from '@/shared/lib/nodemailer'

export async function loginEmail({
  email,
  link,
  token,
}: {
  email: string
  link: string
  token: string
}): Promise<void> {
  try {
    const existingUser = await db.user.findUnique({ where: { email } })

    // Если пользователь не найден, создать нового пользователя
    if (!existingUser) {
      await createUser({ email })
    }
    await sendEmail({
      to: email,
      subject: 'Вход на сайт',
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; background-color: #f9f9f9;">
            <h1 style="text-align: center; color: #007BFF;">Вход на сайт</h1>
            <p style="font-size: 18px;">Для завершения регистрации, пожалуйста, перейдите по следующей ссылке:</p>
            ${link}
            <p style="font-size: 16px;">Если вы не запрашивали это письмо, просто проигнорируйте его.</p>
            <p style="font-size: 16px;">Спасибо!</p>
          </div>
        </div>
      `,
    })
    await db.verificationToken.create({
      data: { token, expires: new Date(Date.now() + 1000 * 60 * 5) },
    })
  } catch (error) {
    console.log(error)
    throw new Error('Ошибка при регистрации!')
  }
}
