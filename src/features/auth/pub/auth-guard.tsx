'use client'
import { useSession } from '@/entities/user/queries/use-session'
import { routes } from '@/shared/routes'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { data, isLoading, isError } = useSession()

  if (isLoading) return <Loader2 className="animate-spin" />
  if (isError || !data) {
    router.replace(routes.MAIN)
    return null
  }

  return <>{children}</>
}
