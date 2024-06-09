import { useQuery } from '@tanstack/react-query'
import { getArticlesByUserId } from '../actions/articles-by-user'

const articlesByUserKey = 'articles-by-user'

export function useArticlesByUser({ userId }: { userId: string }) {
  return useQuery({
    queryKey: [articlesByUserKey, userId],
    queryFn: () => getArticlesByUserId({ userId }),
    staleTime: 60 * 1000 * 30,
  })
}
