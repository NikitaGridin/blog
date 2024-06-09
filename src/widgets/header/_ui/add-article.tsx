import { routes } from '@/shared/routes'
import Link from 'next/link'

export function AddArticle() {
  return (
    <Link
      href={routes.ADD_ARTICLE}
      className="font-medium text-white dark:text-black block bg-black px-4 py-2 rounded-md hover:bg-black/80"
    >
      Написать
    </Link>
  )
}
