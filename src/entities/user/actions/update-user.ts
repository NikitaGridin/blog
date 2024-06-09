'use server'

import { db } from '@/shared/lib/db'

export async function updateUser({
  id,
  email,
  role,
  name,
  image,
}: {
  id: string
  email?: string
  role?: 'ADMIN' | 'USER'
  name?: string | null
  image?: string | null
}) {
  try {
    const updatedUser = await db.user.update({
      where: { id: id },
      data: {
        id,
        email,
        role,
        name,
        image,
      },
    })

    return updatedUser
  } catch (error) {
    console.error('Error updating user:', error)
    throw error
  }
}
