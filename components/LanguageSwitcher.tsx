'use client'

import { useState } from 'react'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('中文')

  const toggleLanguage = () => {
    const newLang = currentLang === '中文' ? 'EN' : '中文'
    setCurrentLang(newLang)
    // In the future, this can integrate with next-i18next or similar
    // For now, it's a placeholder for the language switching functionality
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors"
      aria-label="Switch language"
    >
      <Globe size={18} />
      <span>{currentLang}</span>
    </button>
  )
}

