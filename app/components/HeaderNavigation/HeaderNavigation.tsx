const HeaderNavigation = () => {
  return (
    <nav className='header-nav'>
      <div className='header-nav-bar'>
        <a href='/' className='nav-heading'>
          aldrich.dev
        </a>
        <ul className='header-nav-list'>
          <li>
            <a href='/about'>about</a>
          </li>
          <li>
            <a href='/portfolio'>portfolio</a>
          </li>
          <li>
            <a href='https://aldrichdev.hashnode.dev/' target='_blank'>
              blog
            </a>
          </li>
        </ul>
      </div>
      <hr className='divider' />
    </nav>
  )
}

export default HeaderNavigation
