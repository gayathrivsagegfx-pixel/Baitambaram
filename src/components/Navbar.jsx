export default function Navbar({ navigation, isCurrentPage, variant = 'main', isOpen = false, onToggle = () => {}, onNavigate = () => {} }) {
  const isFooter = variant === 'footer'
  const toggle = (
    <button
      className={isFooter ? 'footer-menu-toggle' : 'menu-toggle'}
      type="button"
      aria-label={isOpen ? `Close ${isFooter ? 'footer ' : ''}navigation` : `Open ${isFooter ? 'footer ' : ''}navigation`}
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <span /><span /><span />
    </button>
  )
  const links = navigation.map(([label, href]) => (
    <a
      key={label}
      className={`${isCurrentPage(href) ? 'active' : ''} ${!isFooter && ['/about-us/', '/administration/', '/contact/'].includes(href) ? 'nav-load-left' : ''}`}
      href={href}
      onClick={isFooter ? undefined : onNavigate}
    >
      {label}
    </a>
  ))

  if (isFooter) {
    return (
      <nav className={isOpen ? 'footer-nav is-open' : 'footer-nav'} aria-label="Footer navigation">
        {toggle}
        {links}
      </nav>
    )
  }

  return (
    <>
      {toggle}
      <nav className={isOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {links}
      </nav>
    </>
  )
}
