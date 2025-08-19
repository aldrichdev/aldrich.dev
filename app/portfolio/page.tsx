'use client'

import { PortfolioProject } from '../components/PortfolioProject'
import { portfolioProjects } from './data'
import { useState } from 'react'

const PortfolioPage = () => {
  const [expandedProject, setExpandedProject] = useState<string | false>(false)

  const handleProjectChange = (projectSlug: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpandedProject(newExpanded ? projectSlug : false)
  }

  return (
    <section className='portfolio-section'>
      <div className='portfolio-heading'>
        <h1>My Portfolio</h1>
        <p>
          I've had the opportunity to work on many exciting website projects over my career and see them to completion.
          Below are some examples.
        </p>
      </div>
      <div className='portfolio-projects'>
        {portfolioProjects.map(project => (
          <PortfolioProject
            key={project.title}
            imageUrl={project.imageUrl}
            iconUrl={project.iconUrl}
            title={project.title}
            technologies={project.technologies}
            projectUrl={project.projectUrl}
            expandedProject={expandedProject}
            onProjectChange={handleProjectChange}
          >
            {project.children}
          </PortfolioProject>
        ))}
      </div>
    </section>
  )
}

export default PortfolioPage
