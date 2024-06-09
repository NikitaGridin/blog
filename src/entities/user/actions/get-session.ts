'use server'

import { privateConfig } from '@/shared/config/private.config'
import { db } from '@/shared/lib/db'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { Session } from '../types/types'

export async function getSession(): Promise<Session> {
  try {
    const token = cookies().get('session-token')

    if (!token || !token.value) throw new Error('token not found')

    const data = jwt.verify(token.value, privateConfig.SECRET_JWT) as Session
    const user = await db.user.findFirst({ where: { id: data.id } })
    if (!user) throw new Error('user not found')

    return user as Session
  } catch (error) {
    console.log(error)
    throw new Error('get session error')
  }
}
