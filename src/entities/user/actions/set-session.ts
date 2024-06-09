'use server'

import { privateConfig } from '@/shared/config/private.config'
import { routes } from '@/shared/routes'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function setSession({
  id,
  email,
  role,
  name,
  image,
}: {
  id: string
  email: string
  role: 'ADMIN' | 'USER'
  name: string | null
  image: string | null
}) {
  const token = jwt.sign({ id, email, role, name, image }, privateConfig.SECRET_JWT)
  cookies().set('session-token', token, { secure: true, httpOnly: true, path: '/' })
  redirect(routes.PROFILE)
}
