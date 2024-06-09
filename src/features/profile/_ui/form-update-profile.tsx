'use client'

import { useSession } from '@/entities/user/queries/use-session'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useUpdateUser } from '../_model/use-update-user'

export function FormUpdateProfile() {
  const session = useSession()

  const [name, setName] = useState(session.data?.name ?? '')
  const updateUser = useUpdateUser()
  if (session.isLoading) return <Loader2 className="animate-spin" />
  if (!session.data || session.isError) return <div>Что то пошло не так, попробуйте позже</div>
  return (
    <form
      className="max-w-[400px] w-full space-y-2"
      onSubmit={(e) => {
        e.preventDefault()
        updateUser.mutate({
          id: session.data.id,
          name,
        })
      }}
    >
      {/* <div>
        <Input type="file" className="w-24 h-24 rounded-full cursor-pointer" />
      </div> */}
      <div>
        <Label htmlFor="name">Электронная почта</Label>
        <Input id="name" value={session.data.email} disabled />
      </div>
      <div>
        <Label htmlFor="name">Как вас зовут</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button loading={updateUser.isPending} disabled={!name || name === session.data.name}>
        Изменить
      </Button>
    </form>
  )
}
