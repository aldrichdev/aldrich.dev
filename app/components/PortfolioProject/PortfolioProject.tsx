import { Accordion, AccordionDetails, AccordionSummary, Button, Typography } from '@mui/material'
import { PortfolioProjectType } from '../../types/PortfolioProjectType'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import slugify from 'slugify'
import { SyntheticEvent } from 'react'

type PortfolioProjectProps = PortfolioProjectType & {
  expandedProject: string | false
  onProjectChange: (projectSlug: string) => (event: SyntheticEvent<Element, Event>, newExpanded: boolean) => void
}

/** An accordion row which showcases a project in the portfolio. */
const PortfolioProject = (props: PortfolioProjectProps) => {
  const { imageUrl, iconUrl, title, technologies, children, projectUrl, expandedProject, onProjectChange } = props
  const titleSlug = slugify(title, { lower: true })

  return (
    <Accordion expanded={expandedProject === titleSlug} onChange={onProjectChange(titleSlug)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${titleSlug}-content`}
        id={`${titleSlug}-header`}
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
          <img src={imageUrl} alt='' className='portfolio-project-image' />
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
