import { aboutPhoto } from '../pageAssets.js'
import PageBanner from './PageBannerComponent.jsx'
import { activityImages } from '../pageData.js'

export default function ActivitiesPage() {
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
