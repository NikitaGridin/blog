import { AuthGuard } from '@/features/auth/pub/auth-guard'
import { Header } from '@/widgets/header/pub/header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header variant={'public'} />
      <main className="container">
        <AuthGuard>{children}</AuthGuard>
      </main>
    </>
  )
}
