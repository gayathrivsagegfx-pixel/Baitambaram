import { useEffect, useState } from 'react'
import About from './pages/About.jsx'
import Administration from './pages/Administration.jsx'
import Activities from './pages/Activities.jsx'
import Membership from './pages/Membership.jsx'
import CommunityCourses from './pages/CommunityCourses.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import membershipApplication from './assets/membership app.pdf'
import courseIntroduction from './assets/INTRODUCTION_ABOUT_THE_COURSE.pdf'
import './App.css'

const navigation = [
  ['Home', '/'],
  ['About Us', '/about-us/'],
  ['Administration', '/administration/'],
  ['Activities', '/events/'],
  ['Become A Member', '/become-a-member/'],
  ['Community & Courses', '/co/'],
  ['Contact', '/contact/'],
]



function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const page = pathname === '/about-us' ? 'about' : pathname === '/administration' ? 'administration' : pathname === '/events' ? 'activities' : pathname === '/become-a-member' ? 'membership' : pathname === '/co' ? 'community' : pathname === '/contact' ? 'contact' : pathname === '/course-introduction' ? 'course-document' : pathname === '/membership-application' ? 'membership-document' : pathname === '/apply-form' ? 'application-form' : 'home'
  const isCurrentPage = (href) => ({
    '/': 'home', '/about-us/': 'about', '/administration/': 'administration', '/events/': 'activities',
    '/become-a-member/': 'membership', '/co/': 'community', '/contact/': 'contact',
  })[href] === page
  const pageMetadata = {
    home: ['Home', 'Builders Association of India Tambaram Centre connects builders, engineers, architects and construction professionals through events, training and industry collaboration.'],
    about: ['About BAI Tambaram | Our Aims & Objectives', 'Learn about the Builders Association of India Tambaram Centre, its mission, achievements and support for the construction community.'],
    administration: ['Administration | BAI Tambaram', 'Meet the office bearers and past chairmen of the Builders Association of India Tambaram Centre.'],
    activities: ['Activities & Events | BAI Tambaram', 'Explore activities, meetings, celebrations and events hosted by the Builders Association of India Tambaram Centre.'],
    membership: ['Become a Member | BAI Tambaram', 'Find membership categories and learn how builders, construction firms and building material suppliers can join BAI Tambaram.'],
    community: ['Community & Courses | BAI Tambaram', 'Discover construction skills training, courses and career resources from the Builders Association of India Tambaram Centre.'],
    contact: ['Contact BAI Tambaram', 'Contact the Builders Association of India Tambaram Centre for membership, events, courses and construction industry enquiries.'],
    'course-document': ['Course Introduction | BAI Tambaram', 'Read the course introduction from the Builders Association of India Tambaram Centre.'],
    'membership-document': ['Membership Application | BAI Tambaram', 'Open the Builders Association of India Tambaram Centre membership application.'],
    'application-form': ['Construction Careers | BAI Tambaram', 'Apply for construction and real estate career opportunities through BAI Tambaram.'],
  }
  const [pageTitle, pageDescription] = pageMetadata[page] || pageMetadata.home

  useEffect(() => {
    document.title = `Baitambaram | ${pageTitle}`
    const canonicalUrl = `https://baitambaram.com${pathname === '/' ? '/' : `${pathname}/`}`
    const upsertMeta = (attribute, key, content) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }
    upsertMeta('name', 'description', pageDescription)
    upsertMeta('property', 'og:title', `Baitambaram | ${pageTitle}`)
    upsertMeta('property', 'og:description', pageDescription)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', `Baitambaram | ${pageTitle}`)
    upsertMeta('name', 'twitter:description', pageDescription)
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [pageDescription, pageTitle, pathname])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [page])

  useEffect(() => {
    const updateScrollButton = () => setShowScrollTop(window.scrollY > 360)
    updateScrollButton()
    window.addEventListener('scroll', updateScrollButton, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollButton)
  }, [])

  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return undefined

    const selector = [
      '.page-banner', '.intro-slider', '.intro-copy', '.event-feature', '.event-copy .founder-image', '.event-copy > p', '.community-copy', '.benefit',
      '.sponsor-item', '.meeting-sponsor', '.membership-section', '.membership-category',
      '.career-image', '.focus-value', '.about-row-image', '.about-row-copy',
      '.administration-founder', '.office-bearer', '.activity-gallery-grid img',
      '.activity-monthly-grid figure', '.community-intro-copy', '.community-quote',
      '.community-actions', '.community-career', '.contact-details-column', '.contact-map',
      '.contact-message-form',
    ].join(', ')
    const targets = [...main.querySelectorAll(selector)]
    const cardImageParents = '.intro-slider, .benefit, .focus-value, .office-bearer, .administration-founder, .sponsor-item, .membership-category'
    main.querySelectorAll('img').forEach((image) => {
      if (!image.closest(cardImageParents) && !targets.includes(image)) targets.push(image)
    })

    targets.forEach((target, index) => {
      target.classList.add('mobile-reveal-ready')
      const fromLeft = target.matches('.intro-slider, .event-copy .founder-image')
        || (!target.matches('.intro-copy, .event-copy > p') && index % 2 === 0)
      target.style.setProperty('--mobile-reveal-x', fromLeft ? '-38px' : '38px')
      target.style.setProperty('--mobile-reveal-delay', `${(index % 4) * 55}ms`)
    })

    if (!('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' })
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [page])

  return (
    <>
      {!['course-document', 'membership-document', 'application-form'].includes(page) && <a className="skip-link" href="#main">Skip to content</a>}
      {!['course-document', 'membership-document', 'application-form'].includes(page) && <Header navigation={navigation} isCurrentPage={isCurrentPage} />}

      <main id="main" className={page === 'about' ? 'about-page' : page === 'membership' ? 'membership-page' : ['course-document', 'membership-document', 'application-form'].includes(page) ? 'course-document-page' : undefined}>
        {page === 'course-document' && <iframe className="course-document-frame" src={courseIntroduction} title="Introduction about the course PDF" />}
        {page === 'membership-document' && <iframe className="course-document-frame" src={membershipApplication} title="Membership application PDF" />}
        {page === 'application-form' && <iframe className="course-document-frame" src="https://docs.google.com/forms/d/e/1FAIpQLScZDR4ysLkkSy0Rn78G89-KP38OOnUS465iRY0c4PdPUFO0nQ/viewform?embedded=true" title="BAI Tambaram job application form" />}
        {page === 'home' && <Home />}
        {page === 'about' && <About />}
        {page === 'administration' && <Administration />}
        {page === 'activities' && <Activities />}
        {page === 'membership' && <Membership />}
        {page === 'community' && <CommunityCourses />}
        {page === 'contact' && <Contact />}
      </main>

      {!['course-document', 'membership-document', 'application-form'].includes(page) && <Footer navigation={navigation} isCurrentPage={isCurrentPage} />}
      {!['course-document', 'membership-document', 'application-form'].includes(page) && showScrollTop && (
        <button className="scroll-top" type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      )}
    </>
  )
}

export default App
