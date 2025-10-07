import { PortfolioProjectType } from '../types/PortfolioProjectType'

export const portfolioProjects: PortfolioProjectType[] = [
  {
    imageUrl: '/images/portfolio/design-system-colors.png',
    title: 'Alterra Design System',
    technologies: 'React, Storybook, TypeScript, Material UI, Styled Components',
    children: (
      <>
        I ported the client's React components to Storybook and created a fully functional design system, including a
        theme switcher featuring 15 different brands, and interactive documentation showcasing each brand's colors,
        fonts and typographies. The company had 15 different resort websites that all needed to use the same icons,
        components and typographies, so the design system helped them accomplish that.
      </>
    ),
    projectUrl: 'https://www.alterramtn.design/?path=/docs/foundation-getting-started--docs',
  },
  {
    imageUrl: '/images/portfolio/AOPASearch.png',
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
    imageUrl: '/images/portfolio/FXNetworks.png',
    title: 'FX Networks',
    technologies: 'React, Next.js (SSR), TypeScript, Material UI, GraphQL',
    children: (
      <>
        FX Networks is a top media network, and their website needed a redesign, so I was happy to be part of the team
        that took on this effort. Using a proprietary API and the full capabilities of Next.js server-side rendering
        (SSR), our team delivered an attractive new website that displayed their channel's full catalogue of shows and
        beautiful cover art.
      </>
    ),
    projectUrl: 'https://www.fxnetworks.com/',
  },
  {
    imageUrl: '/images/portfolio/bright-horizons.png',
    title: 'Bright Horizons',
    technologies: 'Sitecore, C#, ASP.NET MVC',
    children: (
      <>
        I acted as Sitecore architect for the new Bright Horizons website and saw the project through to completion. I
        wrote new Sitecore templates, layouts and renderings, created roles and users, managed Lucene indexes, and
        implemented AB testing for various pages using Sitecore's tools.
      </>
    ),
    projectUrl: 'https://www.brighthorizons.com/',
  },
  {
    imageUrl: '/images/portfolio/time-trax.png',
    title: 'TimeTrax',
    technologies: 'React, Next.js, TypeScript, PostgreSQL, Tailwind',
    children: (
      <>
        <em>How fast can we create a time-tracking website using AI tools?</em> That question was the foundation for
        this internal project. Shortly after joining the project, I became the lead developer and created email jobs,
        enhanced reporting capabilities, standardized UIs and fixed bugs, utilizing AI tools like Vercel v0, Cursor and
        WindSurf.
      </>
    ),
  },
  {
    imageUrl: '/images/portfolio/mammoth-mountain.png',
    title: 'Mammoth Mountain',
    technologies: 'Sitecore Headless, JSS, C#, React, TypeScript',
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
    imageUrl: '/images/portfolio/caesar-rewards-table-2.jpg',
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
  {
    imageUrl: '/images/portfolio/gaming-community.png',
    title: 'Neat F2P Website',
    technologies: 'React, Next.js, TypeScript, Material UI, API Security',
    children: (
      <>
        The Neat F2P site is a personal project I created to help launch a gaming community. Using React and Next.js, it
        features user authentication, news and event pages, player hiscores, and account management. I secured the
        Next.js API routes through session cookie checks, and added ownership verfication for endpoints that dealt with
        website or game account data. This prevented bad actors from calling these endpoints from an HTTP client such as
        Postman and accessing private user data.
      </>
    ),
    projectUrl: 'https://www.neatf2p.com',
  },
]
