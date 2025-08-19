import { Metadata } from 'next'
import { PortfolioProject } from '../components/PortfolioProject'
import { portfolioProjects } from './data'

export const metadata: Metadata = {
  title: 'Portfolio | aldrich.dev',
}

const PortfolioPage = () => {
  return (
    <section className='portfolio-section'>
      <div className='portfolio-heading'>
        <h1>My Portfolio</h1>
        <p>
          I've had the opportunity to work on many exciting website projects and see them to completion. Below are some
          examples.
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
          >
            {project.children}
          </PortfolioProject>
        ))}
      </div>
    </section>
  )
}

export default PortfolioPage
