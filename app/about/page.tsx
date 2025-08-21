import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | aldrich.dev',
}

const AboutPage = () => {
  return (
    <section className='about-section'>
      <img src='/images/Paul2.jpg' className='bio-photo' alt='Paul Aldrich' />
      <div>
        <h1>About Me</h1>
        <p>
          I've been working as a developer since 2012 on various projects. I started my career with C# and .NET
          development. My first job in industry was an IS internship, where I worked on a whole suite of Windows
          applications that the company needed for its daily operations. A few years later, I started exploring Sitecore
          development and in 2016 I became a Sitecore and Coveo for Sitecore certified developer. In 2018, I worked as
          lead architect on a new Sitecore project for the first time, which was a significant milestone in my career.
          When Coronavirus hit the country, I found myself jobless like many others, and jumped ship to front-end
          development. From that point on, I have been focusing on React, Next.js and Storybook projects.
        </p>
        <p>
          I enjoy writing component-driven applications and using Atomic Design principles in some projects. Code reuse,
          writing helpful documentation and conducting detailed code reviews are important to me in my day-to-day work.
        </p>
        <p>
          If you'd like to see the projects I've worked on, check out my{' '}
          <a href='/portfolio' className='about-portfolio-link'>
            portfolio page
          </a>
          .
        </p>
      </div>
    </section>
  )
}

export default AboutPage
