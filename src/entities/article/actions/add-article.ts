'use server'

import { db } from '@/shared/lib/db'

export async function addArticle({
  title,
  content,
  cover,
  authorId,
}: {
  title: string
  content: string
  cover?: string
  authorId: string
}) {
  try {
    const createdArticle = await db.article.create({
      data: { title, content, cover, userId: authorId },
    })

    return createdArticle
  } catch (error) {
    console.error(error)
    throw new Error('Error add article')
  }
}
