import { useEffect, useRef, useState } from 'react'
import AboutPage from './components/AboutUsComponent.jsx'
import AdministrationPage from './components/AdministrationComponent.jsx'
import ActivitiesPage from './components/ActivitiesComponent.jsx'
import MembershipPage from './components/MembershipComponent.jsx'
import CommunityPage from './components/CommunityCoursesComponent.jsx'
import ContactPage from './components/ContactComponent.jsx'
import HomePage from './components/HomeComponent.jsx'
import { heroSlides, growImages } from './pageData.js'
import logo from './assets/logo.webp'
import skyline from './assets/hp.webp'
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
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeGrowSlide, setActiveGrowSlide] = useState(0)
  const [benefitReverse, setBenefitReverse] = useState(false)
  const [activeTab, setActiveTab] = useState('why')
  const [menuOpen, setMenuOpen] = useState(false)
  const [footerMenuOpen, setFooterMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const growPointerStart = useRef(null)
  const eventsSectionRef = useRef(null)
  const eventsCardRef = useRef(null)
  const founderImageRef = useRef(null)
  const careerSectionRef = useRef(null)
  const sponsorGridRef = useRef(null)
  const [eventsRevealed, setEventsRevealed] = useState(false)
  const [careerRevealed, setCareerRevealed] = useState(false)
  const [sponsorsRevealed, setSponsorsRevealed] = useState(false)
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
    if (page !== 'home') return undefined
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 6500)
    return () => window.clearInterval(timer)
  }, [page])

  useEffect(() => {
    if (page !== 'home') return undefined
    const timer = window.setInterval(() => {
      setActiveGrowSlide((current) => (current + 1) % growImages.length)
    }, 4500)
    return () => window.clearInterval(timer)
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

  useEffect(() => {
    const card = eventsCardRef.current
    if (page !== 'home' || !card) return undefined
    if (!('IntersectionObserver' in window)) {
      setEventsRevealed(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEventsRevealed(true)
        observer.unobserve(card)
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -40px 0px' })
    observer.observe(card)
    return () => observer.disconnect()
  }, [page])

  useEffect(() => {
    const section = careerSectionRef.current
    if (page !== 'home' || !section) return undefined
    if (!('IntersectionObserver' in window)) {
      setCareerRevealed(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCareerRevealed(true)
        observer.unobserve(section)
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' })
    observer.observe(section)
    return () => observer.disconnect()
  }, [page])

  useEffect(() => {
    const grid = sponsorGridRef.current
    if (page !== 'home' || !grid) return undefined
    if (!('IntersectionObserver' in window)) {
      setSponsorsRevealed(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSponsorsRevealed(true)
        observer.unobserve(grid)
      }
    }, { threshold: 0.15, rootMargin: '0px 0px -30px 0px' })
    observer.observe(grid)
    return () => observer.disconnect()
  }, [page])

  useEffect(() => {
    const section = eventsSectionRef.current
    const image = founderImageRef.current
    if (page !== 'home' || !section || !image) return undefined

    let frame = 0
    const updateCardPosition = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = section.getBoundingClientRect()
        const range = window.innerHeight + bounds.height
        const progress = Math.min(1, Math.max(0, (window.innerHeight - bounds.top) / range))
        const distance = Math.min(120, window.innerWidth * 0.22)
        const offset = distance * (1 - progress)
        image.style.setProperty('--ruby-scroll-x', `${offset}px`)
      })
    }

    updateCardPosition()
    window.addEventListener('scroll', updateCardPosition, { passive: true })
    window.addEventListener('resize', updateCardPosition)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateCardPosition)
      window.removeEventListener('resize', updateCardPosition)
    }
  }, [page])

  const changeSlide = (direction) => {
    setActiveSlide((current) => (current + direction + heroSlides.length) % heroSlides.length)
  }

  const startGrowSwipe = (event) => {
    if (event.pointerType === 'touch' || event.pointerType === 'pen') {
      growPointerStart.current = { x: event.clientX, y: event.clientY }
    }
  }

  const finishGrowSwipe = (event) => {
    const start = growPointerStart.current
    growPointerStart.current = null
    if (!start) return

    const deltaX = event.clientX - start.x
    const deltaY = event.clientY - start.y
    const primaryDelta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY
    if (Math.abs(primaryDelta) < 32) return

    setActiveGrowSlide((current) => (current + (primaryDelta < 0 ? 1 : -1) + growImages.length) % growImages.length)
  }

  const cancelGrowSwipe = () => {
    growPointerStart.current = null
  }

  const changeGrowSlide = (direction) => {
    setActiveGrowSlide((current) => (current + direction + growImages.length) % growImages.length)
  }

  return (
    <>
      {!['course-document', 'membership-document', 'application-form'].includes(page) && <a className="skip-link" href="#main">Skip to content</a>}
      {!['course-document', 'membership-document', 'application-form'].includes(page) && <header className="site-header" id="home">
        <a className="brand" href="/" aria-label="BAI Tambaram Centre home">
          <img className="brand-logo" src={logo} alt="Builders’ Association of India, Tambaram Centre" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <a key={label} className={`${isCurrentPage(href) ? 'active' : ''} ${['/about-us/', '/administration/', '/contact/'].includes(href) ? 'nav-load-left' : ''}`} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="/become-a-member/">Become A Member</a>
      </header>}

      <main id="main" className={page === 'about' ? 'about-page' : page === 'membership' ? 'membership-page' : ['course-document', 'membership-document', 'application-form'].includes(page) ? 'course-document-page' : undefined}>
        {page === 'course-document' && <iframe className="course-document-frame" src={courseIntroduction} title="Introduction about the course PDF" />}
        {page === 'membership-document' && <iframe className="course-document-frame" src={membershipApplication} title="Membership application PDF" />}
        {page === 'application-form' && <iframe className="course-document-frame" src="https://docs.google.com/forms/d/e/1FAIpQLScZDR4ysLkkSy0Rn78G89-KP38OOnUS465iRY0c4PdPUFO0nQ/viewform?embedded=true" title="BAI Tambaram job application form" />}
        {page === 'home' && <HomePage
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
          changeSlide={changeSlide}
          activeGrowSlide={activeGrowSlide}
          startGrowSwipe={startGrowSwipe}
          finishGrowSwipe={finishGrowSwipe}
          cancelGrowSwipe={cancelGrowSwipe}
          setActiveGrowSlide={setActiveGrowSlide}
          changeGrowSlide={changeGrowSlide}
          eventsSectionRef={eventsSectionRef}
          eventsCardRef={eventsCardRef}
          eventsRevealed={eventsRevealed}
          founderImageRef={founderImageRef}
          benefitReverse={benefitReverse}
          setBenefitReverse={setBenefitReverse}
          sponsorGridRef={sponsorGridRef}
          sponsorsRevealed={sponsorsRevealed}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          careerSectionRef={careerSectionRef}
          careerRevealed={careerRevealed}
        />}
        {page === 'about' && <AboutPage />}
        {page === 'administration' && <AdministrationPage />}
        {page === 'activities' && <ActivitiesPage />}
        {page === 'membership' && <MembershipPage />}
        {page === 'community' && <CommunityPage />}
        {page === 'contact' && <ContactPage />}
      </main>

      {!['course-document', 'membership-document', 'application-form'].includes(page) && <footer className="site-footer" id="contact" style={{ backgroundImage: `url("${skyline}")` }}>
        <nav className={footerMenuOpen ? 'footer-nav is-open' : 'footer-nav'} aria-label="Footer navigation">
          <button className="footer-menu-toggle" type="button" aria-label={footerMenuOpen ? 'Close footer navigation' : 'Open footer navigation'} aria-expanded={footerMenuOpen} onClick={() => setFooterMenuOpen((open) => !open)}><span /><span /><span /></button>
          {navigation.map(([label, href]) => <a key={label} className={isCurrentPage(href) ? 'active' : ''} href={href}>{label}</a>)}
        </nav>
        <div className="footer-contact-row"><a href="mailto:baitambaramcentre@gmail.com">baitambaramcentre@gmail.com</a><span>@247 Ruby Towers, Velachery Main Road, Selaiyur, Chennai - 73</span><a href="tel:+919444026186">+91 94440 26186</a></div>
        <div className="footer-bottom"><span>Copyright © 2025 baitambaram.com&nbsp; | Powered by <a href="https://sagegfx.com/">Sage GFX Digital Solutions</a></span><a href="https://baitambaram.com/privacy-policy/">Privacy Policy</a></div>
      </footer>}
      {!['course-document', 'membership-document', 'application-form'].includes(page) && showScrollTop && (
        <button className="scroll-top" type="button" aria-label="Scroll to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
      )}
    </>
  )
}

export default App
