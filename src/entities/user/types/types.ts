export type Session = {
  id: string
  email: string
  role: 'ADMIN' | 'USER'
  name: string | null
  image: string | null
}
