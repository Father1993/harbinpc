import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './components/providers/theme-provider'
import { ThemeToggle } from './components/ui/theme-toggle'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ru' suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='container-custom'>
            <nav className='py-4 flex justify-between items-center'>
              <div>HarbinPC</div>
              <ThemeToggle />
            </nav>
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
