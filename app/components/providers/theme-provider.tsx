'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps as NextThemeProviderProps } from 'next-themes'

type ThemeProviderProps = {
  children: React.ReactNode
} & Omit<NextThemeProviderProps, 'children'>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
