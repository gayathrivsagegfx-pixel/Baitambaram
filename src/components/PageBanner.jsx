import { aboutBanner } from '../pageData.js'

export default function PageBanner({ title, image = aboutBanner }) {
  return (
    <section className="page-banner" style={{ backgroundImage: `url("${image}")` }}>
      <div className="page-banner-shade" />
      <h1>{title}</h1>
    </section>
  )
}
