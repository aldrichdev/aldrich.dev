import { PortfolioProjectType } from '../types/PortfolioProjectType'

export const portfolioProjects: PortfolioProjectType[] = [
  {
    imageUrl: '/images/portfolio/design-system-colors.png',
    iconUrl: '/images/storybook-icon.png',
    title: 'Alterra Design System',
    technologies: 'Storybook, React, Material UI, Styled Components',
    children: (
      <>
        I ported the client's React components to Storybook and created a fully functional design system, including a
        theme switcher and interactive documentation showcasing all of the brand's colors, fonts and typographies. The
        company had many different websites and mobile apps that all needed to use the same graphics, components and
        typographies, so the design system achieved all of their goals.
      </>
    ),
    projectUrl: 'https://www.alterramtn.design/?path=/docs/foundation-getting-started--docs',
  },
  {
    imageUrl: '/images/portfolio/coveo-search-page.png',
    iconUrl: '/images/coveo-icon.png',
    title: 'AOPA Search Page',
    technologies: 'Coveo for Sitecore, Sitecore, JavaScript, jQuery, C#, ASP.NET MVC',
    children: (
      <>
        Every website needs a good search page, and the Aircraft Owners and Pilots Association (AOPA) website was no
        exception. By utilizing Coveo for Sitecore's new Hive Framework, I was able to deliver a search page that made
        finding their Sitecore content a breeze, via custom facets, search suggestions and auto-corrections.
      </>
    ),
    projectUrl: 'https://aopa.org/search#sort=relevancy',
  },
  {
    imageUrl: '/images/portfolio/media-network-site.png',
    iconUrl: '/images/nextjs-icon.png',
    title: 'FX Networks',
    technologies: 'Next.js, React, TypeScript, SSR, Material UI, Styled Components, GraphQL',
    children: (
      <>
        The FX Networks brand's web presence needed a redesign, and I was happy to be part of the team that took on this
        effort. Using a proprietary API and the full capabilities of Next.js server-side rendering (SSR), our team
        delivered an attractive new website that could show off their channel's full catalogue of shows and beautiful
        cover art.
      </>
    ),
    projectUrl: 'https://www.fxnetworks.com/',
  },
  {
    imageUrl: '/images/portfolio/bright-horizons.png',
    iconUrl: '/images/sitecore-icon.png',
    title: 'Bright Horizons',
    technologies: 'Sitecore, C#, ASP.NET MVC, Glass Mapper, Unicorn, Lucene',
    children: (
      <>
        I acted as Sitecore architect for the new Bright Horizons website and saw the project through to completion. I
        wrote new templates, layouts and renderings, created roles and users, managed Lucene indexes, and implemented AB
        testing for some pages using Sitecore's tools.
      </>
    ),
    projectUrl: 'https://www.brighthorizons.com/',
  },
  {
    imageUrl: '/images/portfolio/time-trax.png',
    iconUrl: '/images/nextjs-icon.png',
    title: 'TimeTrax',
    technologies: 'Next.js, React, Vercel, TypeScript, Tailwind, Shadcn UI, Supabase, PostgreSQL',
    children: (
      <>
        How fast can we create a time-tracking website using AI? That question was the starting point for this internal
        project. Shortly after joining the project, I became the lead developer and created email jobs, enhanced
        reporting capabilities, standardized UIs and fixed bugs, utilizing AI tools like Vercel v0, Cursor and WindSurf.
      </>
    ),
  },
  {
    imageUrl: '/images/portfolio/mammoth-mountain.png',
    iconUrl: '/images/sitecore-icon.png',
    title: 'Mammoth Mountain',
    technologies: 'Sitecore Headless, C#, Sitecore JSS, React, TypeScript, Emotion, Material UI',
    children: (
      <>
        I helped bring the Mammoth Mountain website from initial design to completion. My most significant contribution
        was setting up structured data for its location pages using Sitecore JSS. This allowed the client to have their
        dining and entertainment pages display as rich results in Google Search.
      </>
    ),
    projectUrl: 'https://www.mammothmountain.com/',
  },
  {
    imageUrl: '/images/portfolio/caesars-rewards-table.png',
    iconUrl: '/images/unity-icon.png',
    title: 'Caesars Rewards Table',
    technologies: 'Unity, C#, Windows',
    children: (
      <>
        Using a large monitor attached to a table, and a Unity project that we built to showcase a rewards program, we
        were able to create an interactive touchscreen table for use at the client's location. The application displayed
        dining and entertainment options and allowed users to build an itinerary for use at the client's locations. I
        worked with a Unity developer to add new content to the table and iron out issues with the touch screen
        experience.
      </>
    ),
  },
]
