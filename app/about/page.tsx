import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | aldrich.dev',
}

const AboutPage = () => {
  return (
    <section className='about-section content-width'>
      <img src='/images/Paul2.jpg' className='bio-photo' alt='Paul Aldrich' />
      <div>
        <h1>About Me</h1>
        <p>
          I’ve been a web developer since 2012, where I started my career with a solid foundation in C#, ASP.NET and SQL
          Server. Along the way, I picked up Sitecore development and became a 2x Sitecore certified developer, where I
          helped architect, build and maintain enterprise-level websites. From 2020 onward, I’ve expanded into modern
          front-end development, gaining extensive experience with React, Next.js, and TypeScript. I enjoy working
          across the stack, bridging the gap between back-end and front-end, e.g. implementing ASP.NET Core APIs and
          Redux actions in a recent project at Mapleton Hill.
        </p>
        <p>
          Beyond coding, I bring a passion for problem-solving and attention to detail. I enjoy writing clean,
          maintainable code and providing thoughtful feedback in code reviews. Mentoring other developers and writing
          clear documentation are also big parts of how I like to contribute to a team’s success. For me, building
          software that’s reliable, easy to maintain, and enjoyable for both developers and users alike is important.
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
