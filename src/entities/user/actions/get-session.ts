'use server'

import { privateConfig } from '@/shared/config/private.config'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'

type Session = {
  id: string
  email: string
  role: 'ADMIN' | 'USER'
  name: string
  image: string | null
  iat: number
}

export async function getSession(): Promise<Session | null> {
  try {
    const token = cookies().get('session-token')

    if (!token || !token.value) return null

    const data = jwt.verify(token.value, privateConfig.SECRET_JWT) as Session
    return data
  } catch (error) {
    console.log(error)
    throw new Error('get session error')
  }
}
