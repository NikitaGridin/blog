import { Header } from '@/widgets/header/pub/header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header variant={'public'} />
      <main className="container">{children}</main>
    </div>
  )
}
