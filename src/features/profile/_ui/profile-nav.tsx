import { Session } from '@/entities/user/types/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import { FormUpdateProfile } from './form-update-profile'

export function ProfileNav({ session }: { session: Session }) {
  return (
    <div className="flex gap-2">
      <Tabs defaultValue="articles">
        <TabsList>
          <TabsTrigger value="articles">Статьи</TabsTrigger>
          <TabsTrigger value="comments">Комментарии</TabsTrigger>
          <TabsTrigger value="subscribes">Подписки</TabsTrigger>
          <TabsTrigger value="favorite">Закладки</TabsTrigger>
          <TabsTrigger value="achievements">Награды</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>
        <TabsContent value="articles">Статьи</TabsContent>
        <TabsContent value="comments">Комментарии</TabsContent>
        <TabsContent value="subscribes">Подписки</TabsContent>
        <TabsContent value="favorite">Закладки</TabsContent>
        <TabsContent value="achievements">Награды</TabsContent>
        <TabsContent value="settings">
          <FormUpdateProfile session={session} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
