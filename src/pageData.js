import { hp1, hp2, hp3, hp4, hp5, icon1, icon2, icon3, icon4, focus, focus1, focus2, focus3, grow1, grow2, grow3, grow4 } from './pageAssets.js'

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


export { heroSlides, aboutBanner, benefitImages, benefitLabels, focusItems, growImages, activityImages }
