import { Logo } from '../_ui/logo'
import { ModeToggle } from '../_ui/mode-theme'
import { Profile } from '../_ui/profile'

export function Header({ variant }: { variant: 'public' | 'auth' | 'private' }) {
  return (
    <header className="bg-white mb-6 dark:bg-black dark:border-b dark:border-gray-800">
      <div className="h-20 container flex items-center justify-between">
        <Logo />
        <nav className="flex items-center gap-4">
          <ModeToggle />
          <Profile />
        </nav>
      </div>
    </header>
  )
}
