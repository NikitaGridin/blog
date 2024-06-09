'use client'

import { queryClient } from '@/shared/config/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
