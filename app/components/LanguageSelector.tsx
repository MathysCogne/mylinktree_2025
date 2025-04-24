'use client'

import { useLanguage } from './LanguageProvider'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/ui/tooltip'

export default function LanguageSelector() {
  const { currentLang, toggleLanguage } = useLanguage()

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={toggleLanguage}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-800 transition-colors"
          aria-label={`Changer la langue en ${currentLang === 'fr' ? 'anglais' : 'français'}`}
        >
          <span className="text-lg">
            {currentLang === 'fr' ? '🇬🇧' : '🇫🇷'}
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{currentLang === 'fr' ? 'Switch to English' : 'Passer en Français'}</p>
      </TooltipContent>
    </Tooltip>
  )
} 