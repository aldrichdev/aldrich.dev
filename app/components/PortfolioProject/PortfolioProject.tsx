import { Button } from '@mui/material'

interface PortfolioProjectProps {
  imageUrl: string
  title: string
  technologies: string
  /** The project description. */
  children: string
  projectUrl?: string
}

/** A row displaying an image and text showcasing a project in the portfolio.
 * Note that parent styles alternate which side the image is on.
 */
const PortfolioProject = (props: PortfolioProjectProps) => {
  const { imageUrl, title, technologies, children, projectUrl } = props

  return (
    <div className='portfolio-project'>
      <img src={imageUrl} alt='' />
      <div className='portfolio-details'>
        <h2>{title}</h2>
        <em>{technologies}</em>
        <p>{children}</p>
        {projectUrl && (
          <Button variant='outlined' href={projectUrl} target='_blank' rel='noopener noreferrer'>
            ➤ View project
          </Button>
        )}
      </div>
    </div>
  )
}

export default PortfolioProject
