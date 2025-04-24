'use client'

export type Language = 'fr' | 'en'

const LANG_STORAGE_KEY = 'preferred_language'
const DEFAULT_LANGUAGE: Language = 'fr'

export function getLang(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE
  return (localStorage.getItem(LANG_STORAGE_KEY) as Language) || DEFAULT_LANGUAGE
}

export function setLang(lang: Language) {
  if (typeof window === 'undefined') return
  localStorage.setItem(LANG_STORAGE_KEY, lang)
}

export function isValidLanguage(lang: string): lang is Language {
  return ['fr', 'en'].includes(lang)
} 