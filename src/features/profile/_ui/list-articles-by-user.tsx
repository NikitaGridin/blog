import { getArticlesByUserId } from '@/entities/article/actions/articles-by-user'
import Link from 'next/link'

function getStatusLabel(status: 'AWAIT_CONFIRM' | 'PUBLISHED' | 'REJECTED'): string {
  switch (status) {
    case 'AWAIT_CONFIRM':
      return 'Ожидает подтверждения'
    case 'PUBLISHED':
      return 'Опубликовано'
    case 'REJECTED':
      return 'Отклонено'
    default:
      return 'Неизвестный статус'
  }
}

export async function ListArticlesByUser({ userId }: { userId: string }) {
  const articles = await getArticlesByUserId({ userId })

  return (
    <div className="w-full space-y-2">
      {articles.map((article) => {
        return (
          <div
            key={article.id}
            className="border p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <Link href={''}>
              <h2 className="text-2xl font-semibold">{article.title}</h2>
              <div className="font-medium text-gray-600">{article.content}</div>
              <div className="text-gray-400 underline">{getStatusLabel(article.status)}</div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
