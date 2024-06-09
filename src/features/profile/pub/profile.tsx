'use client'
import { useSession } from '@/entities/user/queries/use-session'
import { Loader2 } from 'lucide-react'
import { LogoutBtn } from '../_ui/logout-btn'

export function Profile() {
  const session = useSession()
  if (session.isLoading) return <Loader2 className="animate-spin" />
  console.log(session.data)

  return (
    <div>
      {session.data?.email}
      <LogoutBtn />
    </div>
  )
}
