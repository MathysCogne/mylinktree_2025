'use client'

import { useState, useEffect } from 'react'

export function useIsFirefox() {
  const [isFirefox, setIsFirefox] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsFirefox(navigator.userAgent.toLowerCase().includes('firefox'))
    }
  }, [])

  return isFirefox
} 