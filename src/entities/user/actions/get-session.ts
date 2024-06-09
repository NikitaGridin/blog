'use server'

import { privateConfig } from '@/shared/config/private.config'
import { db } from '@/shared/lib/db'
import jwt from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { Session } from '../types/types'

export async function getSession(): Promise<Session | null> {
  try {
    const token = cookies().get('session-token')

    if (!token || !token.value) return null

    const data = jwt.verify(token.value, privateConfig.SECRET_JWT) as Session
    const user = db.user.findFirst({ where: { id: data.id } })
    return user
  } catch (error) {
    console.log(error)
    throw new Error('get session error')
  }
}
