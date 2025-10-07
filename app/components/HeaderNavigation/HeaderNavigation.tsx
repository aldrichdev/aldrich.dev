import { usePathname } from 'next/navigation'

const HeaderNavigation = () => (
  <nav className='header-nav'>
    <div className='header-nav-bar'>
      <a href='/' className='nav-heading'>
        aldrich.dev
      </a>
      <ul className='header-nav-list'>
        <li>{usePathname() === '/about' ? <p className='header-link-active'>about</p> : <a href='/about'>about</a>}</li>
        <li>
          {usePathname() === '/portfolio' ? (
            <p className='header-link-active'>portfolio</p>
          ) : (
            <a href='/portfolio'>portfolio</a>
          )}
        </li>
        <li>
          <a href='https://aldrichdev.hashnode.dev/' target='_blank'>
            blog
          </a>
        </li>
        <li>
          {usePathname() === '/contact' ? (
            <p className='header-link-active'>contact</p>
          ) : (
            <a href='/contact'>contact</a>
          )}
        </li>
      </ul>
    </div>
    <hr className='divider header-divider' />
  </nav>
)

export default HeaderNavigation
