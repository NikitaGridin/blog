import { updateUser } from '@/entities/user/actions/update-user'
import { useInvalidateSession } from '@/entities/user/queries/use-session'
import { useMutation } from '@tanstack/react-query'

export function useUpdateUser() {
  const invalidateSession = useInvalidateSession()
  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      invalidateSession()
    },
  })
}
