import { Button } from '@mui/material'
import { PortfolioProjectType } from '../../types/PortfolioProjectType'

/** A Parallax-driven project graphic which showcases a project in the portfolio. */
const PortfolioProject = (props: PortfolioProjectType) => {
  const { imageUrl, iconUrl, title, technologies, children, projectUrl } = props

  return (
    <div className='project-root'>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className='parallax-image'>
        <div className='parallax-image-caption'>
          <img src={iconUrl} className='project-technology-icon' />
          {title}
        </div>
      </div>
      <div className='project-info'>
        <p className='project-technologies'>{technologies}</p>
        <p className='project-description'>{children}</p>
        {projectUrl && (
          <Button variant='contained' href={projectUrl} target='_blank' rel='noopener noreferrer'>
            ➤ Visit site
          </Button>
        )}
      </div>
    </div>
  )
}

export default PortfolioProject
