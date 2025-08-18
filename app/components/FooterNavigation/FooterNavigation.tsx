const FooterNavigation = () => {
  return (
    <footer className='footer'>
      <hr className='divider' />
      <div className='footer-content'>
        <span>&copy; {new Date().getFullYear()} Paul Aldrich</span>
        <div className='footer-links'>
          <a href='https://www.linkedin.com/in/paul-aldrich-07a07116/' target='_blank' rel='noopener noreferrer'>
            <img src='/images/linkedin-icon-bw.png' alt='LinkedIn Icon' className='footer-icon' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterNavigation
