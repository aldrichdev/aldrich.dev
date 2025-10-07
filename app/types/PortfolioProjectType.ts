import { ReactNode } from 'react'

export interface PortfolioProjectType {
  imageUrl: string
  title: string
  technologies: string
  /** The project description. */
  children: ReactNode | string
  projectUrl?: string
}
