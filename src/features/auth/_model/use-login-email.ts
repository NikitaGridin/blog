import { routes } from '@/shared/routes'
import { useMutation } from '@tanstack/react-query'
import crypto from 'crypto'
import { useRouter } from 'next/navigation'
import { loginEmail } from '../_actions/login-email'
import { generateLink } from './generate-link'

export function useLoginEmail() {
  const router = useRouter()
  const token = crypto.randomBytes(64).toString('hex')
  const { isPending, mutate } = useMutation({
    mutationFn: async ({ email }: { email: string }) => {
      const link = generateLink({ token, email })
      return loginEmail({ email, link, token })
    },
    onSuccess: () => {
      router.replace(routes.VERIFY_EMAIL)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  return {
    isPending: isPending,
    login: mutate,
  }
}
