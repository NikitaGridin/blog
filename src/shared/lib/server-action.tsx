'use client'

import { useEffect } from 'react'

export function ServerAction({ action }: { action: () => Promise<void> }) {
  useEffect(() => {
    const fetchAction = async () => {
      await action()
    }
    fetchAction()
  }, [action])

  return <></>
}
