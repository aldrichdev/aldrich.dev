import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | aldrich.dev',
}

const ContactPage = () => {
  return (
    <section className='contact-section'>
      <h1>Contact</h1>
      <p>
        You may email me at <strong>aldrichdev@gmail.com</strong> for any questions, networking or job opportunities.
      </p>
      <p>Do not email me to advertise any of your professional services. I am not interested.</p>
    </section>
  )
}

export default ContactPage
