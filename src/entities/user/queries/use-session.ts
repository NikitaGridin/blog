import { queryClient } from '@/shared/config/react-query'
import { useQuery } from '@tanstack/react-query'
import { getSession } from '../actions/get-session'

const sessionKey = 'session'

export function useSession() {
  return useQuery({
    queryKey: [sessionKey],
    queryFn: () => getSession(),
    retry: 0,
    staleTime: 60 * 1000 * 15,
  })
}

export function useResetSession() {
  return () => {
    queryClient.clear()
  }
}
export function useInvalidateSession() {
  return () => {
    queryClient.invalidateQueries({ queryKey: [sessionKey] })
  }
}
