'use client'
import { Button } from '@/shared/ui/button'
import { Card, CardContent, CardHeader } from '@/shared/ui/card'
import { Input } from '@/shared/ui/input'
import { Label } from '@/shared/ui/label'
import { useState } from 'react'
import { useLoginEmail } from '../_model/use-login-email'

export function LoginEmailForm() {
  const [email, setEmail] = useState('')
  const { login, isPending } = useLoginEmail()

  return (
    <Card className="max-w-[400px] mx-auto mt-24">
      <CardHeader>
        <h1 className="text-2xl font-semibold">Вход</h1>
      </CardHeader>
      <CardContent>
        <form
          className="grid gap-2"
          onSubmit={(e) => {
            e.preventDefault(),
              login({
                email,
              })
          }}
        >
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isPending}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button loading={isPending} disabled={!email}>
            Войти через Email
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
