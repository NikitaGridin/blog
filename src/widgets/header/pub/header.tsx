import { Logo } from '../_ui/logo'
import { Profile } from '../_ui/profile'

export function Header({ variant }: { variant: 'public' | 'auth' | 'private' }) {
  return (
    <header className="h-20 bg-white flex items-center justify-between px-10">
      <Logo />
      <nav>
        <Profile />
      </nav>
    </header>
  )
}
