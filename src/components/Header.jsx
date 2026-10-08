import { useState } from 'react'
import logo from '../assets/logo.webp'
import Navbar from './Navbar.jsx'

export default function Header({ navigation, isCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header" id="home">
      <a className="brand" href="/" aria-label="BAI Tambaram Centre home">
        <img className="brand-logo" src={logo} alt="Buildersâ€™ Association of India, Tambaram Centre" />
      </a>
      <Navbar
        navigation={navigation}
        isCurrentPage={isCurrentPage}
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
        onNavigate={() => setMenuOpen(false)}
      />
      <a className="header-cta" href="/become-a-member/">Become A Member</a>
    </header>
  )
}
