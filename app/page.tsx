import { Button } from '@mui/material'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | aldrich.dev',
}

const HomePage = () => {
  return (
    <section className='homepage-section'>
      <div className='homepage-heading'>
        <h1>Hi, I'm Paul Aldrich! 👋</h1>
        <em>Full Stack Developer - React, Next.js, Storybook, Sitecore</em>
      </div>
      <img src='/images/Paul.jpg' className='homepage-avatar ' />
      <p>I am a web developer based out of Chicago, IL, with professional experience in the field since 2012.</p>
      <Button variant='contained' color='primary' href='/portfolio' sx={{ margin: '2rem 0 2.5rem' }}>
        Check Out My Work
      </Button>
    </section>
  )
}

export default HomePage
