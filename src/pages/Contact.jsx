import { useEffect, useState } from 'react'
import { formBackground, skyline } from '../pageAssets.js'
import PageBanner from '../components/PageBanner.jsx'

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle')

  useEffect(() => {
    if (formStatus !== 'success' && formStatus !== 'error') return undefined
    const timeout = window.setTimeout(() => setFormStatus('idle'), 5000)
    return () => window.clearTimeout(timeout)
  }, [formStatus])

  const sendMessage = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    setFormStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xrpepyal', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Form submission failed')
      form.reset()
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-page-sticky-background" style={{ backgroundImage: `url("${formBackground}")` }} aria-hidden="true" />
      <PageBanner title="CONTACT" image={formBackground} />
      <section className="contact-page-content">
        <div className="contact-page-scroll-background" style={{ backgroundImage: `url("${skyline}")` }} aria-hidden="true" />
        <div className="contact-page-layout">
          <div className="contact-details-column">
            <div className="contact-subheading"><h2>Get In Touch</h2><span /></div>
            <address className="contact-details-list">
              <p><span aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" /></svg></span><span>@247 Ruby Towers, Velachery Main Road, Selaiyur, Chennai - 73</span></p>
              <a href="tel:+919444026186"><span aria-hidden="true">☎</span><span>+91 94440 26186</span></a>
              <a href="mailto:baitambaramcentre@gmail.com"><span aria-hidden="true">✉</span><span>baitambaramcentre@gmail.com</span></a>
              <a href="mailto:baitbmjobarchive@gmail.com"><span aria-hidden="true">✉</span><span>baitbmjobarchive@gmail.com</span></a>
            </address>
            <div className="contact-subheading contact-find-heading"><h2>Find Us</h2><span /></div>
            <iframe
              className="contact-map"
              title="Map to BAI Tambaram Centre"
              src="https://maps.google.com/maps?q=Ruby%20Towers%2C%20Velachery%20Main%20Road%2C%20Selaiyur%2C%20Chennai&t=&z=14&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <form className="contact-message-form" onSubmit={sendMessage}>
            <h2>Send Us A Message</h2>
            <input name="name" type="text" placeholder="Name" aria-label="Name" required />
            <input name="email" type="email" placeholder="Email" aria-label="Email" required />
            <input name="mobile" type="tel" placeholder="Mobile Number" aria-label="Mobile Number" required />
            <textarea name="message" placeholder="Message" aria-label="Message" required />
            <button className="contact-send-button" type="submit" disabled={formStatus === 'sending'}>{formStatus === 'sending' ? 'Sending…' : 'Send'}</button>
            {formStatus === 'success' && <p role="status">Thank you. Your enquiry has been sent.</p>}
            {formStatus === 'error' && <p role="alert">Sorry, your enquiry could not be sent. Please try again.</p>}
          </form>
        </div>
      </section>
    </div>
  )
}
