import { aboutPhoto, rubyc, robert, subra, raja, dinesh, kanda, lava, wilson, suresh, ben } from '../pageAssets.js'
import PageBanner from './PageBannerComponent.jsx'

export default function AdministrationPage() {
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
