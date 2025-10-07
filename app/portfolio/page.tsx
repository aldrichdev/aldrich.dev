'use client'

import { PortfolioProject } from '../components/PortfolioProject'
import { portfolioProjects } from './data'

const PortfolioPage = () => (
  <section className='portfolio-section'>
    <div className='portfolio-heading'>
      <h1>Portfolio</h1>
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
          title={project.title}
          technologies={project.technologies}
          projectUrl={project.projectUrl}
        >
          {project.children}
        </PortfolioProject>
      ))}
    </div>
  </section>
)

export default PortfolioPage
