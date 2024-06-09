import { addArticle } from '@/entities/article/actions/add-article'
import { useMutation } from '@tanstack/react-query'

export function useAddArticle() {
  const { isPending, mutate } = useMutation({
    mutationFn: addArticle,
    onSuccess: () => {},
    onError: (error) => {
      console.log(error)
    },
  })

  return {
    isPending: isPending,
    addArticle: mutate,
  }
}
