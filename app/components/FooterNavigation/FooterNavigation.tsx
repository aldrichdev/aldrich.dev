import { IconButton } from '@mui/material'

const FooterNavigation = () => {
  return (
    <footer className='footer content-width'>
      <hr className='divider footer-divider' />
      <div className='footer-content'>
        <span>&copy; {new Date().getFullYear()} Paul Aldrich</span>
        <div className='footer-links'>
          <IconButton href='https://www.linkedin.com/in/paul-aldrich/' target='_blank' rel='noopener noreferrer'>
            <img src='/images/linkedin-icon-bw.png' alt='LinkedIn Icon' className='footer-icon' />
          </IconButton>
          <IconButton href='https://github.com/aldrichdev' target='_blank' rel='noopener noreferrer'>
            <img src='/images/github-icon.png' alt='GitHub Icon' className='footer-icon' />
          </IconButton>
          <IconButton
            href='https://stackoverflow.com/users/1168189/paul?tab=profile'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='/images/so-icon.png' alt='Stack Overflow Icon' className='footer-icon' />
          </IconButton>
        </div>
      </div>
    </footer>
  )
}

export default FooterNavigation
