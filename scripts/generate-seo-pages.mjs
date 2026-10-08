import fs from 'node:fs'
import path from 'node:path'

const output = path.resolve('dist')
const template = fs.readFileSync(path.join(output, 'index.html'), 'utf8')
const routes = [
  ['about-us', 'About BAI Tambaram | Our Aims & Objectives', 'Learn about the Builders Association of India Tambaram Centre, its mission, achievements and support for the construction community.'],
  ['administration', 'Administration | BAI Tambaram', 'Meet the office bearers and past chairmen of the Builders Association of India Tambaram Centre.'],
  ['events', 'Activities & Events | BAI Tambaram', 'Explore activities, meetings, celebrations and events hosted by the Builders Association of India Tambaram Centre.'],
  ['become-a-member', 'Become a Member | BAI Tambaram', 'Find membership categories and learn how builders, construction firms and building material suppliers can join BAI Tambaram.'],
  ['co', 'Community & Courses | BAI Tambaram', 'Discover construction skills training, courses and career resources from the Builders Association of India Tambaram Centre.'],
  ['contact', 'Contact BAI Tambaram', 'Contact the Builders Association of India Tambaram Centre for membership, events, courses and construction industry enquiries.'],
]

for (const [route, title, description] of routes) {
  const canonical = `https://baitambaram.com/${route}/`
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title} | BAI Tambaram Centre</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*("\s*\/?>)/, `$1${title} | BAI Tambaram Centre$2`)
    .replace(/(<meta property="og:description" content=")[^"]*("\s*\/?>)/, `$1${description}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*("\s*\/?>)/, `$1${canonical}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, `$1${canonical}$2`)
  const directory = path.join(output, route)
  fs.mkdirSync(directory, { recursive: true })
  fs.writeFileSync(path.join(directory, 'index.html'), html)
}
