import { cn } from '@/shared/ui/utils'
import { Montserrat } from 'next/font/google'
import { AppProvider } from './_providers/app-provider'
import './globals.css'

const font = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-gray-100 dark:bg-black', font.className)}>
        HELLO WORLD
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
