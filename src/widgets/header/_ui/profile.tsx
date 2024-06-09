'use client'
import { useSession } from '@/entities/user/queries/use-session'
import { routes } from '@/shared/routes'
import Link from 'next/link'

export function Profile() {
  const { isLoading, isError, data } = useSession()
  if (isLoading) return <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
  if (isError || !data) return <Link href={routes.LOGIN}>Войти</Link>
  return <Link href={routes.PROFILE}>Профиль</Link>
}
