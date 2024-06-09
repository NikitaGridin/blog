import { Header } from '@/widgets/header/pub/header'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <Header variant={'public'} />
      <main>{children}</main>
    </div>
  )
}
