import { getSession } from '@/entities/user/actions/get-session'
import { getUser } from '@/entities/user/actions/get-user'
import { LogoutBtn } from '../_ui/logout-btn'
import { ProfileNav } from '../_ui/profile-nav'

export async function Profile({ userId }: { userId: string }) {
  try {
    const session = await getSession().catch(() => null) // Если getSession выбрасывает ошибку, вернуть null
    const user = await getUser({ id: userId })

    if (!user) return <div>Пользователь не найден</div>

    const isOwner = session ? user.id === session.id : false

    return (
      <div className="bg-white rounded-md p-4 dark:bg-gray-900 space-y-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">{isOwner ? 'Профиль' : user.name}</h1>
          {isOwner && <LogoutBtn />}
        </div>
        <ProfileNav userId={user.id} isOwner={isOwner} />
      </div>
    )
  } catch (error) {
    return <div>Ошибка загрузки профиля</div>
  }
}
