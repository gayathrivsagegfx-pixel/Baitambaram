import { useState } from 'react'
import skyline from '../assets/hp.webp'
import Navbar from './Navbar.jsx'

export default function Footer({ navigation, isCurrentPage }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <footer className="site-footer" id="contact" style={{ backgroundImage: `url("${skyline}")` }}>
      <Navbar
        variant="footer"
        navigation={navigation}
        isCurrentPage={isCurrentPage}
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((open) => !open)}
      />
      <div className="footer-contact-row"><a href="mailto:baitambaramcentre@gmail.com">baitambaramcentre@gmail.com</a><span>@247 Ruby Towers, Velachery Main Road, Selaiyur, Chennai - 73</span><a href="tel:+919444026186">+91 94440 26186</a></div>
      <div className="footer-bottom"><span>Copyright Â© 2025 baitambaram.com&nbsp; | Powered by <a href="https://sagegfx.com/">Sage GFX Digital Solutions</a></span><a href="https://baitambaram.com/privacy-policy/">Privacy Policy</a></div>
    </footer>
  )
}
