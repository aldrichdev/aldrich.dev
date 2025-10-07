import { PortfolioProjectType } from '../../types/PortfolioProjectType'

/** A component which showcases a project in the portfolio. */
const PortfolioProject = (props: PortfolioProjectType) => {
  const { imageUrl, title, technologies, children, projectUrl } = props

  return (
    <div className='project-root'>
      <div className='portfolio-image-gradient'>
        <div className='portfolio-image-container'>
          <img src={imageUrl} className='portfolio-image' />
        </div>
      </div>
      <div className='project-info'>
        {projectUrl ? (
          <a href={projectUrl} target='_blank' rel='noopener noreferrer' className='project-title'>
            {title}
          </a>
        ) : (
          <p className='project-title'>{title}</p>
        )}
        <p className='project-technologies'>⚡️ {technologies} ⚡️</p>
        <p className='project-description'>{children}</p>
      </div>
    </div>
  )
}

export default PortfolioProject
