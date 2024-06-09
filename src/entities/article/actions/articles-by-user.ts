'use server'

import { db } from '@/shared/lib/db'

export async function getArticlesByUserId({ userId }: { userId: string }) {
  try {
    // Проверяем, существует ли пользователь с данным userId
    const userExists = await db.user.findUnique({
      where: { id: userId },
    })

    if (!userExists) {
      throw new Error('User does not exist')
    }

    // Получаем статьи пользователя
    const articles = await db.article.findMany({
      where: { userId: userId },
    })

    return articles
  } catch (error) {
    console.error(error)
    throw new Error('Error fetching articles')
  }
}
