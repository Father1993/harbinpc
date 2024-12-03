'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
      aria-label='Toggle theme'
    >
      <Sun className='h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100' />
    </button>
  )
}
