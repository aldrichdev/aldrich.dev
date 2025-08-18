import { Button } from '@mui/material'
import { Metadata } from 'next'
import { PortfolioProject } from '../components/PortfolioProject'

export const metadata: Metadata = {
  title: 'Portfolio | aldrich.dev',
}

/** Idea: Short banners with images of real things I've worked on.
 * Hovering over one of these zooms in on the image
 * Show project name, description, and technologies used
 */
const PortfolioPage = () => {
  return (
    <section className='portfolio-section'>
      <div className='portfolio-heading'>
        <h1>My Portfolio</h1>
        <p>
          I've had the opportunity to work on many exciting website projects and see them to completion. Below are some
          examples.
        </p>
      </div>
      <div className='portfolio-projects'>
        <PortfolioProject
          imageUrl='/images/portfolio/design-system-colors.png'
          title='Alterra Design System'
          technologies='React, Material UI, Styled Components, Storybook'
          projectUrl='https://www.alterramtn.design/?path=/docs/foundation-getting-started--docs'
        >
          I ported a client's React components to Storybook and created a fully functional design system, including a
          theme switcher and interactive documentation showcasing all of the brand's colors, fonts and typographies.
        </PortfolioProject>
        <PortfolioProject
          imageUrl='/images/portfolio/coveo-search-page.png'
          title='AOPA Search Page'
          technologies='Sitecore, Coveo for Sitecore Hive Framework, JavaScript, jQuery, C#, ASP.NET MVC'
          projectUrl='https://aopa.org/search#sort=relevancy'
        >
          I created a Coveo for Sitecore search page using the Hive framework for the Aircraft Owners and Pilots
          Association (AOPA), which allows users to search for pages on the site and filter results. The search
          experience features search suggestions, auto-corrections and OpenGraph images for each result, if present.
        </PortfolioProject>
        <PortfolioProject
          imageUrl='/images/portfolio/media-network-site.png'
          title='FX Networks'
          technologies='TypeScript, Next.js, SSR, Material UI, Styled Components, Graph QL'
          projectUrl='https://www.fxnetworks.com/'
        >
          I helped redesign the FX Networks website using Next.js and server-side rendering of pages using a proprietary
          API.
        </PortfolioProject>
        <PortfolioProject
          imageUrl='/images/portfolio/bright-horizons.png'
          title='Bright Horizons'
          technologies='Sitecore, C#, ASP.NET MVC, Glass Mapper, Unicorn, Lucene'
          projectUrl='https://www.brighthorizons.com/'
        >
          I acted as Sitecore architect for the Bright Horizons website and saw the project through to completion. I
          wrote new templates, layouts and renderings, created roles and users, managed Lucene indexes, and implemented
          AB testing for certain pages using Sitecore's tools.
        </PortfolioProject>
        <PortfolioProject
          imageUrl='/images/portfolio/time-trax.png'
          title='TimeTrax'
          technologies='React, Next.js, TypeScript, Supabase, Tailwind CSS'
          projectUrl='https://www.timetrax.ai/'
        >
          I was the lead developer on TimeTrax shortly after joining the project. I created email jobs, enhanced report
          exporting capabilities, standardized UIs and fixed bugs.
        </PortfolioProject>
        <PortfolioProject
          imageUrl='/images/portfolio/mammoth-mountain.png'
          title='Mammoth Mountain'
          technologies='tbd'
          projectUrl='https://www.timetrax.ai/'
        >
          I helped build the Mammoth Mountain website. My most significant contributions included adding structured data
          to its dining and entertainment pages, which allowed those locations to show as rich results in Google search,
          as well as setup and support for the daily message, search page, and other pages across the site.
        </PortfolioProject>
      </div>
    </section>
  )
}

export default PortfolioPage
