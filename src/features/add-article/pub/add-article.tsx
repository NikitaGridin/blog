'use client'
import { useSession } from '@/entities/user/queries/use-session'
import { routes } from '@/shared/routes'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Textarea } from '@/shared/ui/textarea'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useAddArticle } from '../_model/use-add-article'

export function AddArticle() {
  const session = useSession()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addArticle, isPending } = useAddArticle()

  if (session.isLoading) return <Loader2 className="animate-spin" />
  if (!session.data || session.isError) {
    return (
      <div>
        <h1 className="text-2xl font-semibold">Что бы добавить статью, войдите</h1>
        <Link href={routes.LOGIN}>Войти</Link>
      </div>
    )
  }

  return (
    <div className="bg-white py-12 rounded-md">
      <form
        className="max-w-[768px] w-full mx-auto space-y-4"
        onSubmit={(e) => {
          e.preventDefault()
          addArticle({
            title,
            content,
            authorId: session.data.id,
          })
          setTitle('')
          setContent('')
        }}
      >
        <h1 className="text-3xl font-bold">Добавление статьи</h1>
        <Input placeholder="Заголовок" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea
          placeholder="Ваш текст"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <div>
          <Label htmlFor="cover">Обложка статьи</Label>
          <Input id="cover" type="file" disabled />
        </div>
        <Button disabled={!title || !content} loading={isPending}>
          Отправить
        </Button>
      </form>
    </div>
  )
}
