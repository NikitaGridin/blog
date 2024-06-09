'use client'
import { useSession } from '@/entities/user/queries/use-session'
import { Loader2 } from 'lucide-react'
import { LogoutBtn } from '../_ui/logout-btn'
import { ProfileNav } from '../_ui/profile-nav'

export function Profile() {
  const session = useSession()
  if (session.isLoading) return <Loader2 className="animate-spin" />
  if (!session.data || session.isError) return <div>Что то пошло не так, попробуйте позже</div>

  return (
    <div className="bg-white rounded-md p-4 dark:bg-gray-900 space-y-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Профиль</h1>
        <LogoutBtn />
      </div>
      <ProfileNav session={session.data} />
    </div>
  )
}
