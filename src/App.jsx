import { useEffect, useRef, useState } from 'react'
import logo from './assets/logo.webp'
import ruby from './assets/ruby.webp'
import rubyc from './assets/rubyc.webp'
import robert from './assets/robert.webp'
import subra from './assets/subra.webp'
import raja from './assets/raja.webp'
import dinesh from './assets/dinesh.webp'
import kanda from './assets/kanda.webp'
import lava from './assets/lava.webp'
import wilson from './assets/wilson.webp'
import suresh from './assets/suresh.webp'
import ben from './assets/ben.webp'
import member from './assets/member.webp'
import thrive from './assets/thrive.webp'
import skyline from './assets/hp.webp'
import grow1 from './assets/grow1.webp'
import grow2 from './assets/grow2.webp'
import grow3 from './assets/grow3.webp'
import grow4 from './assets/grow4.webp'
import hp1 from './assets/hp1.webp'
import hp2 from './assets/hp2.webp'
import hp3 from './assets/hp3.webp'
import hp4 from './assets/hp4.webp'
import hp5 from './assets/hp5.webp'
import aboutPhoto from './assets/about.webp'
import aim1 from './assets/aim1.webp'
import aim2 from './assets/aim2.webp'
import aim3 from './assets/aim3.webp'
import icon1 from './assets/1.webp'
import icon2 from './assets/2.webp'
import icon3 from './assets/3.webp'
import icon4 from './assets/4.webp'
import focus from './assets/focus.webp'
import focus1 from './assets/focus1.webp'
import focus2 from './assets/focus2.webp'
import focus3 from './assets/focus3.webp'
import formBackground from './assets/form.webp'
import membershipApplication from './assets/membership app.pdf'
import courseIntroduction from './assets/INTRODUCTION_ABOUT_THE_COURSE.pdf'
import './App.css'

const heroSlides = [
  hp1,
  hp2,
  hp3,
  hp4,
  hp5,
]

const aboutBanner = hp4
const benefitImages = [icon1, icon2, icon3, icon4]
const benefitLabels = ['Active Events', '200+ Members', 'Corporate Governance', '5+ Years']
const focusItems = [
  { image: focus, label: 'Focused Forum' },
  { image: focus1, label: 'Great Opportunities' },
  { image: focus2, label: 'Authorized Representation' },
  { image: focus3, label: 'Industry Update' },
]
const growImages = [grow1, grow2, grow3, grow4]
const activityImages = Object.entries(import.meta.glob('./assets/activities/*.webp', { eager: true, import: 'default', query: '?url' }))
  .sort(([pathA], [pathB]) => Number(pathA.match(/\d+/)?.[0] ?? 0) - Number(pathB.match(/\d+/)?.[0] ?? 0))
  .map(([, image]) => image)

const navigation = [
  ['Home', '/'],
  ['About Us', '/about-us/'],
  ['Administration', '/administration/'],
  ['Activities', '/events/'],
  ['Become A Member', '/become-a-member/'],
  ['Community & Courses', '/co/'],
  ['Contact', '/contact/'],
]

function AboutPage() {
  const aboutSectionsRef = useRef(null)
  const sections = [
    {
      title: 'Aims & Objectives',
      image: aim1,
      items: [
        ['Encouraging Unity and Collaboration:', 'Strengthening bonds among members to create a unified and supportive construction community.'],
        ['Guidance in Technical and Legal Aspects:', 'Providing expert advice and assistance to help members navigate industry challenges.'],
        ['Promoting Fair Practices:', 'Fostering ethical business conduct by discouraging unfair trade practices and unhealthy competition.'],
        ['Enhancing Technical Expertise:', 'Elevating industry standards through training, seminars, exhibitions, and conventions to keep members updated on evolving construction methodologies.'],
        
      ],
    },
    {
      title: 'Mission & Achievements',
      image: aim2,
      items: [
        ['Policy Advocacy:', 'Collaborates with the government to improve construction policies.'],
        ['Urban Planning:', 'Contributed to the CMDA Master Plan and empowered local authorities.'],
        ['Fair Pricing:', 'Introduced the Price Variation Clause for transparent rates.'],
        ['Sustainability:', 'Advocated for manufactured sand in government projects.'],
        ['Standardized Contracts:', 'Promotes FIDIC-based equitable agreements.'],
        ['Education:', 'Helped establish NICMAR with multiple campuses.'],
      ],
    },
    {
      title: "BAI's Vision",
      image: aim3,
      items: [
        ['Unity & Fair Practices:', 'Promoting ethical competition and trust among contractors.'],
        ['Public Confidence:', 'Ensuring transparency and accountability in the industry.'],
        ['Strong Stakeholder Relations:', 'Enabling smooth, cost-effective project execution.'],
        ['Industry Modernization:', 'Collaborating with government bodies to upgrade standards.'],
        ['Excellence & Competitiveness:', 'Adopting global best practices for quality and efficiency.'],
      ],
    },
  ]

  useEffect(() => {
    const container = aboutSectionsRef.current
    if (!container) return undefined

    const images = [...container.querySelectorAll('.about-row-image')]
    let frame = 0
    const updateImagePositions = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        images.forEach((image) => {
          const bounds = image.getBoundingClientRect()
          const offset = Math.max(-55, Math.min(55, (window.innerHeight / 2 - bounds.top) * 0.18))
          image.style.setProperty('--about-image-shift', `${offset}px`)
        })
      })
    }

    updateImagePositions()
    window.addEventListener('scroll', updateImagePositions, { passive: true })
    window.addEventListener('resize', updateImagePositions)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateImagePositions)
      window.removeEventListener('resize', updateImagePositions)
    }
  }, [])

  return (
    <>
      <PageBanner title="ABOUT US" image={aboutPhoto} />
      <section className="about-intro">
        <div className="about-intro-panel">
          <h2>The Builders Association of India</h2>
          <p>The Builders Association of India (BAI) was founded in 1941 in Pune, Maharashtra, by Brigadier C.V.S. Jackson and a group of visionary builders to unify the construction industry and promote ethical practices. Over the years, BAI has grown into India’s largest construction industry association, representing over 20,000 businesses across 180+ centers. It plays a crucial role in shaping policies, setting industry standards, and fostering innovation in infrastructure development. The BAI Tambaram chapter continues this legacy, supporting the local construction community with resources, training, and networking opportunities.</p>
        </div>
      </section>
      <div ref={aboutSectionsRef} className="about-sections">
        {sections.map((section, index) => (
          <section className={`about-row ${index % 2 ? 'about-row-reverse' : ''}`} key={section.title}>
            <div className="about-row-image" style={{ backgroundImage: `url("${section.image}")` }}>
              <h2>{section.title}</h2>
            </div>
            <div className="about-row-copy">
              <h3>{section.title === 'Aims & Objectives' ? 'The aims & objectives of the Builders Association of India Inter-alia are' : section.title}</h3>
              <ul>{section.items.map(([label, text]) => <li key={label}><strong>{label}</strong> {text}</li>)}</ul>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

function PageBanner({ title, image = aboutBanner }) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url("${image}")` }}>
      <div className="page-banner-shade" />
      <h1>{title}</h1>
    </section>
  )
}

function AdministrationPage() {
  const officeBearers = [
    ['H. Robert Livingston', 'Center Chairman', robert],
    ['A. Subramanian', 'Vice Chairman', subra],
    ['S. Rajasekar', 'Hon. Secretary', raja],
    ['G. Dinesh Kumar', 'Hon. Joint Secretary', dinesh],
    ['K. Kandasamy', 'Hon. Treasurer', kanda],
  ]
  const pastChairmen = [
    ['V. Lavakumar', 'Chairman(2021-22)', lava],
    ['S. Wilson Raj', 'Chairman (2022-23)', wilson],
    ['R. Suresh', 'Chairman(2023-24)', suresh],
    ['T. Benjamin Rajan', 'Immediate Past Chairman(2024-25)', ben],
  ]

  return (
    <>
      <PageBanner title="ADMINISTRATION" image={aboutPhoto} />
      <section className="administration-content">
        <article className="administration-founder">
          <img src={rubyc} alt="Dr. Ruby R Manoharan (MLA), Founder Chairman, Tambaram Center" />
        </article>
        <section className="office-bearers">
          <h2>Office Bearers For The Year 2025-2026</h2>
          <span className="office-bearers-rule" />
          <div className="office-bearers-grid">
            {officeBearers.map(([name, role, image]) => (
              <article className="office-bearer" key={name}>
                <img className="administration-card-image" src={image} alt={`${name}, ${role}`} />
              </article>
            ))}
          </div>
        </section>
        <section className="past-chairmen">
          <h2>Past Chairmen</h2>
          <span className="past-chairmen-rule" />
          <div className="past-chairmen-grid">
            {pastChairmen.map(([name, role, image]) => (
              <article className="office-bearer" key={name}>
                <img className="administration-card-image" src={image} alt={`${name}, ${role}`} />
              </article>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

function ActivitiesPage() {
  const galleries = [
    { title: 'BAI Tambaram Centre Inauguration', start: 0, end: 5 },
    { title: 'Chairman V Lavakumar, Installation Function 2021-22', start: 5, end: 9 },
    { title: 'Chairman S Wilson Raj, Installation Function 2022-23', start: 9, end: 16 },
    { title: 'Chairman R Suresh Installation Function 2023-24', start: 16, end: 24 },
    { title: 'Chairman T Benjamin Rajan Installation Function 2024-25', start: 24, end: 32 },
    { title: 'BAI State Level Meeting 2024-25', start: 32, end: 38 },
    { title: 'EC Meeting April - 2025', start: 38, end: 42 },
    { title: 'Family Meet - 2024', start: 54, end: 62 },
    { title: 'Builders Day Celebrations', start: 62, end: 66 },
    { title: 'More Activities', start: 66, end: 70 },
  ]
  const monthlyMeetings = ['May - 2024', 'June - 2024', 'July - 2024', 'August - 2024', 'September - 2024', 'October - 2024', 'November - 2024', 'December - 2024', 'January - 2025', 'February - 2025', 'March - 2025', 'April - 2025']

  return (
    <>
      <PageBanner title="ACTIVITIES" image={aboutPhoto} />
      <div className="activities-page">
        {galleries.slice(0, 7).map(({ title, start, end }) => (
          <section className="activity-gallery" key={title}>
            <h2>{title}</h2>
            <span className="activity-gallery-rule" />
            <div className="activity-gallery-grid">
              {activityImages.slice(start, end).map((image, index) => (
                <img src={image} alt={`${title} photo ${index + 1}`} loading="lazy" key={image} />
              ))}
            </div>
          </section>
        ))}
        <section className="activity-monthly-gallery" aria-label="Executive committee meetings">
          <div className="activity-monthly-grid">
            {activityImages.slice(42, 54).map((image, index) => (
              <figure key={image}>
                <img src={image} alt={`Executive committee meeting, ${monthlyMeetings[index]}`} loading="lazy" />
                <figcaption>EC Meeting {monthlyMeetings[index]}</figcaption>
              </figure>
            ))}
          </div>
        </section>
        {galleries.slice(7).map(({ title, start, end }) => (
          <section className="activity-gallery" key={title}>
            <h2>{title}</h2>
            <span className="activity-gallery-rule" />
            <div className="activity-gallery-grid">
              {activityImages.slice(start, end).map((image, index) => (
                <img src={image} alt={`${title} photo ${index + 1}`} loading="lazy" key={image} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

function MembershipPage() {
  return (
    <div id="membership-top">
      <PageBanner title="BECOME A MEMBER" image={aboutPhoto} />
      <section className="membership-info">
        <p>Any individual, company, society, corporate body, or firm involved in construction work or any type of building activity, along with suppliers and manufacturers of building materials, hardware, and construction equipment, is eligible to join the Association.</p>
      </section>
      <section className="membership-page-content">
        <h2 className="membership-section-label">Category of Membership</h2>
        <div className="membership-categories">
          <article className="membership-category membership-category-annual">
            <h3>Annual Members</h3>
            <p>Members are required to pay an annual membership fee along with a subscription. The annual membership fee for this category will be revised every alternate year.</p>
          </article>
          <article className="membership-category membership-category-patron">
            <h3>Patron Members</h3>
            <p>Patron membership is a lifetime membership. Members are required to pay the lifetime membership fee at once.</p>
          </article>
        </div>
        <div className="membership-downloads" id="downloads">
          <a className="membership-section-label membership-downloads-link" href="#membership-top">Downloads</a>
          <a className="membership-application-link" href="/membership-application/" target="_blank" rel="noreferrer">Membership Application</a>
        </div>
      </section>
    </div>
  )
}

function CommunityPage() {
  const pageRef = useRef(null)

  useEffect(() => {
    const items = pageRef.current?.querySelectorAll('[data-community-reveal]')
    const image = pageRef.current?.querySelector('.community-intro-image')
    if (!items?.length) return undefined
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.18 })
    items.forEach((item) => observer.observe(item))
    let frame = 0
    const updateImagePosition = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        if (!image) return
        const bounds = image.getBoundingClientRect()
        const offset = Math.max(-48, Math.min(48, (window.innerHeight / 2 - bounds.top) * 0.12))
        image.style.setProperty('--community-image-y', `${offset}px`)
      })
    }
    updateImagePosition()
    window.addEventListener('scroll', updateImagePosition, { passive: true })
    window.addEventListener('resize', updateImagePosition)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateImagePosition)
      window.removeEventListener('resize', updateImagePosition)
    }
  }, [])

  return (
    <div className="community-page" id="community-top" ref={pageRef}>
      <PageBanner title="COMMUNITY & COURSES" image={aboutPhoto} />
      <section className="community-intro">
        <img className="community-intro-image" src={grow4} alt="A lit construction site with workers and a tower crane" data-community-reveal />
        <div className="community-intro-copy" data-community-reveal>
          <h2>BAI Tambaram Centre: Empowering the Future of Skilled Construction</h2>
          <p>The <strong>Builders’ Association of India (BAI) Tambaram Centre</strong> plays a vital role in strengthening the construction industry by addressing workforce challenges. Established in 2018, it supports over 200+ members, including leading builders and real estate developers. Recognizing the scarcity of skilled labor, the Tambaram Centre founded the <strong>Tambaram Builders Welfare Trust</strong> to provide vocational training in trades like <strong>electrician, plumbing, and carpentry.</strong> These programs aim to equip workers with industry-relevant skills, ensuring job opportunities and sustainable construction growth. By fostering skill development, BAI Tambaram contributes significantly to India’s infrastructure sector.</p>
        </div>
      </section>
      <section className="community-quote" id="courses" style={{ backgroundImage: `url("${formBackground}")` }} data-community-reveal>
        <p>The foundation of success is skill! Join the BAI Tambaram Centre and build a future that stands tall.</p>
      </section>
      <section className="community-actions" aria-label="Course resources">
        <a className="membership-section-label membership-downloads-link" href="#community-top">Downloads</a>
        <a className="community-course-link" href="/course-introduction/" target="_blank" rel="noreferrer">Course Details</a>
      </section>
      <section className="community-career" style={{ backgroundImage: `url("${member}")` }} data-community-reveal>
        <div className="community-career-copy">
          <h2>Are You An Engineer Or Architect Looking For Job, Upload Your Details Here And Get Placed In Real Estate Companies.</h2>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScZDR4ysLkkSy0Rn78G89-KP38OOnUS465iRY0c4PdPUFO0nQ/viewform" target="_blank" rel="noreferrer">Apply Now</a>
        </div>
      </section>
    </div>
  )
}

function ContactPage() {
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
  const pageTitle = {
    '/': 'Home',
    '/about-us': 'About Us',
    '/administration': 'Administration',
    '/events': 'Activities',
    '/become-a-member': 'Become a Member',
    '/co': 'Community & Courses',
    '/course-introduction': 'Course Introduction',
    '/membership-application': 'Membership Application',
    '/apply-form': 'Job Application',
    '/contact': 'Contact',
  }[pathname] || 'Home'

  useEffect(() => {
    document.title = `Baitambaram | ${pageTitle}`
  }, [pageTitle])

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
        {page === 'home' && <>
        <section className="hero" aria-label="Featured stories">
          {heroSlides.map((slide, index) => <div key={slide} className={activeSlide === index ? 'hero-image is-active' : 'hero-image'} style={{ backgroundImage: `url("${slide}")` }} aria-hidden="true" />)}
          <div className="hero-shade" />
          <div className="hero-content">
            <h1>Building a Better Tomorrow with Innovation and Expertise—BAI Tambaram Centre!</h1>
          </div>
          <button className="hero-arrow hero-arrow-left" type="button" aria-label="Previous slide" onClick={() => changeSlide(-1)}>←</button>
          <button className="hero-arrow hero-arrow-right" type="button" aria-label="Next slide" onClick={() => changeSlide(1)}>→</button>
          <div className="hero-dots" aria-label="Choose featured story">
            {heroSlides.map((slide, index) => (
              <button key={slide} type="button" aria-label={`Go to slide ${index + 1}`} aria-current={activeSlide === index} onClick={() => setActiveSlide(index)} />
            ))}
          </div>
          <div className="hero-index"><span>0{activeSlide + 1}</span><i /><span>0{heroSlides.length}</span></div>
        </section>

        <section className="intro section-wrap" id="about">
          <div
            className="intro-slider"
            aria-label="Construction project images"
            onPointerDown={startGrowSwipe}
            onPointerUp={finishGrowSwipe}
            onPointerCancel={() => { growPointerStart.current = null }}
          >
            {growImages.map((image, index) => (
              <img
                key={image}
                className={activeGrowSlide === index ? 'grow-slide is-active' : 'grow-slide'}
                src={image}
                alt={`Construction project view ${index + 1}`}
                draggable="false"
              />
            ))}
            <button className="grow-arrow grow-arrow-left" type="button" aria-label="Previous construction image" onClick={() => changeGrowSlide(-1)}>‹</button>
            <button className="grow-arrow grow-arrow-right" type="button" aria-label="Next construction image" onClick={() => changeGrowSlide(1)}>›</button>
            <div className="grow-indicators" aria-label="Choose construction image">
              {growImages.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`Show construction image ${index + 1}`}
                  aria-current={activeGrowSlide === index}
                  onClick={() => setActiveGrowSlide(index)}
                />
              ))}
            </div>
          </div>
          <div className="intro-copy">
            <h2>Tambaram: A Growing Hub for Modern Living</h2>
            <p>The Builders’ Association of India (BAI) Tambaram Centre is a premier professional organization dedicated to promoting excellence in the construction industry. As part of BAI, a nationally recognized body, the Tambaram Centre provides a platform for builders, engineers, architects, and allied professionals to collaborate, share knowledge, and enhance their technical expertise. Through specialized training programs, industry events, and skill development initiatives, the Centre empowers professionals with the latest advancements in construction technology, best practices, and regulatory compliance.</p>
            <p>With a commitment to fostering growth and innovation in the construction sector, BAI Tambaram Centre serves as a hub for learning and professional development, ensuring that members stay ahead in a rapidly evolving industry.</p>
          </div>
        </section>

        <section ref={eventsSectionRef} className="events-section" id="activities">
          <div className="section-wrap events-layout">
            <div className="event-feature">
              <div className="event-heading"><h2>Events</h2><span /></div>
              <div className="event-details">
                <p className="event-date">April 7–2025</p>
                <h3>Installation Ceremony 2025–2026</h3>
              </div>
              <div ref={eventsCardRef} className={eventsRevealed ? 'event-copy is-visible' : 'event-copy'}>
                <img ref={founderImageRef} className="founder-image" src={ruby} alt="Dr. Ruby Manoharan" />
                <p>Dr. Ruby Manoharan, the Founder Chairman, was instrumental in establishing the BAI Tambaram Centre in 2019 with 40 esteemed members, including prominent builders, property developers, architects, engineers, and planners.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section" id="gallery">
          <div className="gallery-sticky-background" style={{ backgroundImage: `url("${thrive}")` }} aria-hidden="true">
            <div className="community-shade" />
          </div>
          <div className="community-copy"><h2>A Thriving Community, Top-Notch Amenities, and a Promising Future—Welcome to Tambaram!</h2></div>
        </section>

        <section className="benefits-strip" id="benefits" aria-label="Member benefits">
          <button className="benefit-arrow" type="button" aria-label="Reverse benefit carousel" onClick={() => setBenefitReverse(true)}>‹</button>
          <div className="benefit-window">
            <div className={benefitReverse ? 'benefit-track is-reverse' : 'benefit-track'}>
              {[0, 1].map((copy) => (
                <div className="benefit-group" key={copy} aria-hidden={copy === 1}>
                  {benefitImages.map((image, index) => <div className="benefit" key={image}><img src={image} alt={copy === 0 ? benefitLabels[index] : ''} /></div>)}
                </div>
              ))}
            </div>
          </div>
          <button className="benefit-arrow" type="button" aria-label="Play benefit carousel forward" onClick={() => setBenefitReverse(false)}>›</button>
          <div className="benefit-pagination" aria-hidden="true">{benefitImages.map((image) => <span key={image} />)}</div>
        </section>

        <section className="sponsorship-section" id="sponsorship">
          <div className="section-wrap">
            <div className="section-heading sponsorship-heading"><div><span className="section-kicker">PARTNER WITH US</span><h2>Installation sponsorship <em>tariff.</em></h2></div><p>Put your brand in front of the people moving our industry forward.</p></div>
            <div ref={sponsorGridRef} className={sponsorsRevealed ? 'sponsor-grid is-visible' : 'sponsor-grid'}>
              {[
                ['Title Sponsor – 2,00,000/-', 'Inclusions Stall size 4M x 3M +LED Display advertisement at whole event +20 mins presentation in the event'],
                ['Diamond Sponsor – 1,50,000/-', 'Inclusions Stall size 3M x 3M +LED Display advertisement at whole event +10 mins presentation in the event'],
                ['Gold Sponsor – 1,00,000/-', 'Inclusions Stall size 2M x 3M +LED Display advertisement at whole event +5 mins presentation event'],
                ['Silver Sponsor – 75,000/-', 'Inclusions Stall size 2M x 3M +LED Display advertisement at whole event'],
                ['Stall Sponsors – 30,000/-', 'Inclusions Stall size 2M x 3M'],
              ].map(([heading, detail]) => (
                <article className="sponsor-item" key={heading}>
                  <h3>{heading}</h3><p>{detail}</p>
                </article>
              ))}
            </div>
            <div className="meeting-sponsor"><div><h3>Monthly Meeting Sponsorship-60,000/-</h3></div><ul><li>Including 30 minutes time to present their products</li><li>15 minutes time for in-person interaction with our eminent members</li><li>Complete database of our association members will be provided</li></ul></div>
          </div>
        </section>

        <section className="membership-section" id="membership" style={{ backgroundImage: `url("${member}")` }}>
          <div className="section-wrap membership-layout">
            <div className="membership-lead"><span className="section-kicker">GROW WITH THE INDUSTRY</span><h2>Make your next<br /><em>connection count.</em></h2><p>Join a professional community working to elevate construction across India.</p><a className="button button-red" href="mailto:baitambaramcentre@gmail.com?subject=BAI%20Tambaram%20membership%20enquiry">Become a member <span aria-hidden="true">→</span></a></div>
            <div className="membership-detail">
              <h3>Become a member</h3>
              <div className="tab-list" role="tablist" aria-label="Membership information">
                <button type="button" role="tab" aria-selected={activeTab === 'why'} onClick={() => setActiveTab('why')}>Why BAI</button>
                <button type="button" role="tab" aria-selected={activeTab === 'membership'} onClick={() => setActiveTab('membership')}>Membership</button>
              </div>
              <h4 className="mobile-membership-topic">{activeTab === 'why' ? 'Why BAI' : 'Membership'}</h4>
              {activeTab === 'why' ? (
                <div className="tab-panel" role="tabpanel"><p>BAI serves as a platform for professionals in the construction industry to come together, collaborate, and support one another. It fosters a strong professional community that not only promotes business growth but also helps elevate the industry to new heights.</p><a className="text-link" href="mailto:baitambaramcentre@gmail.com">Talk to our team <span aria-hidden="true">↗</span></a></div>
              ) : (
                <div className="tab-panel" role="tabpanel"><p>Membership connects builders, property developers, architects, engineers and planners through industry events, knowledge-sharing and a strong professional network.</p><a className="text-link" href="mailto:baitambaramcentre@gmail.com?subject=Membership%20enquiry">Enquire about joining <span aria-hidden="true">↗</span></a></div>
              )}
              <div className="membership-index"><span>01</span><span>02</span><span>03</span><span>04</span></div>
            </div>
          </div>
        </section>

        <section ref={careerSectionRef} className={careerRevealed ? 'career-section is-visible' : 'career-section'}>
          <div className="career-image" />
          <div className="career-copy"><span className="section-kicker">CAREER ALERT</span><h2>Career Alert!!</h2><p>Are You An Engineer Or Architect Looking For Job, Upload Your Details Here And Get Placed In Real Estate Companies.</p><a className="button button-light" href="https://forms.gle/swvkebiuWZM6TAJj6" target="_blank" rel="noreferrer">Apply Now <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="focus-values" aria-label="What members gain">
          <div className="focus-values-grid">
            {focusItems.map(({ image, label }) => (
              <article className="focus-value" key={label}>
                <img src={image} alt="" />
                <h3>{label}</h3>
              </article>
            ))}
          </div>
        </section>

        </>}
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
