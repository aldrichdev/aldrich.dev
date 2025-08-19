import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import { PortfolioProjectType } from '../../types/PortfolioProjectType'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

/** An accordion row which showcases a project in the portfolio. */
const PortfolioProject = (props: PortfolioProjectType) => {
  const { imageUrl, iconUrl, title, technologies, children, projectUrl } = props

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel1-content'
        id='panel1-header'
        className='portfolio-accordion-summary'
      >
        <img src={iconUrl} className='accordion-summary-icon' />
        <Typography component='span' className='accordion-summary-text'>
          <p className='accordion-summary-paragraph project-title'>{title}</p>
          <p className='accordion-summary-paragraph project-technologies'>{technologies}</p>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className='portfolio-project'>
          <img src={imageUrl} alt='' />
          <div className='portfolio-details'>
            <p>{children}</p>
            {projectUrl && (
              <Button variant='outlined' href={projectUrl} target='_blank' rel='noopener noreferrer'>
                ➤ Visit site
              </Button>
            )}
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default PortfolioProject
