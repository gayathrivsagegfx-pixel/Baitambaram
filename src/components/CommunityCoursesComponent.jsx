import { useEffect, useRef } from 'react'
import { aboutPhoto, grow4, formBackground, member } from '../pageAssets.js'
import PageBanner from './PageBannerComponent.jsx'

export default function CommunityPage() {
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
