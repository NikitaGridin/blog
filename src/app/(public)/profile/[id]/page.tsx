import { Profile } from '@/features/profile/pub/profile'

export default function ProfilePage({ params }: { params: { id: string } }) {
  return <Profile userId={params.id} />
}
