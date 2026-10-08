import { heroSlides, benefitImages, benefitLabels, focusItems, growImages } from '../pageData.js'
import { ruby, member, thrive } from '../pageAssets.js'

export default function HomePage({ activeSlide, setActiveSlide, changeSlide, activeGrowSlide, startGrowSwipe, finishGrowSwipe, cancelGrowSwipe, setActiveGrowSlide, changeGrowSlide, eventsSectionRef, eventsCardRef, eventsRevealed, founderImageRef, benefitReverse, setBenefitReverse, sponsorGridRef, sponsorsRevealed, activeTab, setActiveTab, careerSectionRef, careerRevealed }) {
  return (<>
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
            onPointerCancel={cancelGrowSwipe}
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


  </>)
}
