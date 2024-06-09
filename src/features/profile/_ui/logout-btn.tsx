'use client'
import { useLogout } from '@/entities/user/mutations/use-logout'
import { Button } from '@/shared/ui/button'

export function LogoutBtn() {
  const logout = useLogout()
  return (
    <Button
      variant={'ghost'}
      loading={logout.isPending}
      onClick={() => logout.mutate()}
      className="text-gray-600"
    >
      Выйти
    </Button>
  )
}
