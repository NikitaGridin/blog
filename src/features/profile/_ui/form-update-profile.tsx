'use client'

import { Session } from '@/entities/user/types/types'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useState } from 'react'
import { useUpdateUser } from '../_model/use-update-user'

export function FormUpdateProfile({ session }: { session: Session }) {
  const [name, setName] = useState(session.name ?? '')
  const updateUser = useUpdateUser()
  return (
    <form
      className="max-w-[400px] w-full space-y-2"
      onSubmit={(e) => {
        e.preventDefault()
        updateUser.mutate({
          id: session.id,
          name,
        })
      }}
    >
      {/* <div>
        <Input type="file" className="w-24 h-24 rounded-full cursor-pointer" />
      </div> */}
      <div>
        <Label htmlFor="name">Электронная почта</Label>
        <Input id="name" value={session.email} disabled />
      </div>
      <div>
        <Label htmlFor="name">Как вас зовут</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <Button loading={updateUser.isPending} disabled={!name || name === session.name}>
        Изменить
      </Button>
    </form>
  )
}
