import { privateConfig } from '@/shared/config/private.config'
import { db } from '@/shared/lib/db'
import { routes } from '@/shared/routes'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server'

export async function GET(req: Request, res: Response) {
  if (!req.url) return NextResponse.json({ error: 'Bad Request: URL is missing' }, { status: 400 })

  const { searchParams } = new URL(req.url)

  const token = searchParams.get('token')
  const email = searchParams.get('email')
  if (!token || !email) return Response.json({ error: 'Invalid Link' }, { status: 400 })

  const tokenDB = await db.verificationToken.findFirst({ where: { token } })
  if (!tokenDB) return NextResponse.json({ error: 'Token not found' }, { status: 404 })
  if (tokenDB.expires < new Date()) return Response.json({ error: 'Token expired' })

  const user = await db.user.findFirst({ where: { email } })
  if (!user) return Response.json({ error: 'User not found' }, { status: 404 })

  const sessionToken = jwt.sign(
    { id: user.id, name: user.name, email: user.email, image: user.image, role: user.role },
    privateConfig.SECRET_JWT,
  )
  cookies().set({
    name: 'session-token',
    value: sessionToken,
    httpOnly: true,
    path: '/',
    secure: true,
  })
  redirect(routes.PROFILE + '/' + user.id)
}
