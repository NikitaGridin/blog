import { routes } from '@/shared/routes'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { deleteSession } from '../actions/delete-session'
import { useResetSession } from '../queries/use-session'

export function useLogout() {
  const router = useRouter()
  const resetSession = useResetSession()
  return useMutation({
    mutationFn: () => deleteSession(),
    onSuccess: () => {
      resetSession()
      router.replace(routes.MAIN)
    },
  })
}
