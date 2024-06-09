'use server'
import { db } from '@/shared/lib/db'

export async function createUser({ email }: { email: string }) {
  try {
    const createdUser = await db.user.create({
      data: { email },
    })
    return createdUser
  } catch (error) {
    console.log(error)
    throw new Error('user find error')
  }
}
