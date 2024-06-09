'use client'

import { queryClient } from '@/shared/config/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './theme-provider'

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  )
}
