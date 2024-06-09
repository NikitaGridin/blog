import { Header } from '@/widgets/header/pub/header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header variant={'auth'} />
      <main>{children}</main>
    </div>
  )
}
