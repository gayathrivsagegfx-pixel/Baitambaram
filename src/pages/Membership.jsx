import { aboutPhoto } from '../pageAssets.js'
import PageBanner from '../components/PageBanner.jsx'

export default function Membership() {
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
