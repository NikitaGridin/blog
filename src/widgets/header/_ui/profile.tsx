'use client'
import { useSession } from '@/entities/user/queries/use-session'
import { routes } from '@/shared/routes'
import { LogIn } from 'lucide-react'
import Link from 'next/link'

export function Profile() {
  const { isLoading, isError, data } = useSession()
  if (isLoading) return <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
  if (isError || !data)
    return (
      <Link href={routes.LOGIN}>
        <LogIn />
      </Link>
    )
  return (
    <Link
      href={routes.PROFILE}
      className="uppercase rounded-full w-10 h-10 border flex items-center justify-center hover:bg-gray-100"
    >
      {data.email[0]}
      {data.email[1]}
    </Link>
  )
}
