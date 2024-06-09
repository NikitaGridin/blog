import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/ui/tabs'
import { Loader2 } from 'lucide-react'
import { Suspense } from 'react'
import { FormUpdateProfile } from './form-update-profile'
import { ListArticlesByUser } from './list-articles-by-user'

export function ProfileNav({ userId, isOwner }: { userId: string; isOwner: boolean }) {
  return (
    <div className="flex gap-2">
      <Tabs defaultValue="articles" className="w-full">
        <TabsList>
          <TabsTrigger value="articles">Статьи</TabsTrigger>
          <TabsTrigger value="comments">Комментарии</TabsTrigger>
          <TabsTrigger value="subscribes">Подписки</TabsTrigger>
          <TabsTrigger value="favorite">Закладки</TabsTrigger>
          <TabsTrigger value="achievements">Награды</TabsTrigger>
          {isOwner && <TabsTrigger value="settings">Настройки</TabsTrigger>}
        </TabsList>
        <TabsContent value="articles">
          <Suspense fallback={<Loader2 className="animate-spin" />}>
            <ListArticlesByUser userId={userId} />
          </Suspense>
        </TabsContent>
        <TabsContent value="comments">Комментарии</TabsContent>
        <TabsContent value="subscribes">Подписки</TabsContent>
        <TabsContent value="favorite">Закладки</TabsContent>
        <TabsContent value="achievements">Награды</TabsContent>
        {isOwner && (
          <TabsContent value="settings">
            <FormUpdateProfile />
          </TabsContent>
        )}
      </Tabs>
    </div>
  )
}
