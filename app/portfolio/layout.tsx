import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio | aldrich.dev',
}

export default function PortfolioPage({ children }: { children: ReactNode }) {
  return children
}
