import { useEffect, useRef } from 'react'
import { aim1, aim2, aim3, aboutPhoto } from '../pageAssets.js'
import PageBanner from './PageBannerComponent.jsx'

export default function AboutPage() {
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
