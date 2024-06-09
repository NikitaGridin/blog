'use server'
import { db } from '@/shared/lib/db'

export async function getUser({ id }: { id: string }) {
  try {
    const user = await db.user.findFirst({
      where: { id },
    })
    return user
  } catch (error) {
    console.log(error)
    throw new Error('get user error')
  }
}
