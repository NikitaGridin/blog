'use server'

import { db } from '@/shared/lib/db'

export async function getToken({ token }: { token: string }) {
  return db.user.findFirst({
    where: { token },
  })
}
