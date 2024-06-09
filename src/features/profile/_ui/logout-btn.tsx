import { useLogout } from '@/entities/user/mutations/use-logout'
import { Button } from '@/shared/ui/button'

export function LogoutBtn() {
  const resetSession = useLogout()
  return (
    <Button loading={resetSession.isPending} onClick={() => resetSession.mutate()}>
      Выйти
    </Button>
  )
}
