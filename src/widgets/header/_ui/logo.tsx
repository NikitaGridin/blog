import { routes } from '@/shared/routes'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href={routes.MAIN} className="text-xl font-bold text-blue-600">
      NIKITA/BLOG
    </Link>
  )
}
