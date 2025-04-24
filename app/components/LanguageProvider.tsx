'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Language } from '@/lib/utils/lang'
import { getLang, setLang } from '@/lib/utils/lang'

type LanguageContextType = {
  currentLang: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('fr')

  useEffect(() => {
    // Charger la langue depuis le localStorage au montage
    setCurrentLang(getLang())
  }, [])

  const toggleLanguage = () => {
    const newLang: Language = currentLang === 'fr' ? 'en' : 'fr'
    setLang(newLang)
    setCurrentLang(newLang)
  }

  return (
    <LanguageContext.Provider value={{ currentLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 