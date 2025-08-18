'use client'

import '../styles.css'
import { ReactNode } from 'react'
import { HeaderNavigation } from './components/HeaderNavigation'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme/theme'
import { FooterNavigation } from './components/FooterNavigation'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider theme={theme}>
          <main>
            <HeaderNavigation />
            {children}
            <FooterNavigation />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
