import { useState } from 'react'
import { Menu, PhoneCall, X } from 'lucide-react'
import Logo from './Logo.jsx'

const links = [
  ['home', 'Αρχική'],
  ['services', 'Υπηρεσίες'],
  ['why-us', 'Γιατί Terminal;'],
  ['coverage', 'Περιοχές'],
  ['contact', 'Επικοινωνία'],
]

export default function Navbar({ currentSection, onNavigate }) {
  const [open, setOpen] = useState(false)

  const goTo = (sectionId) => {
    onNavigate(sectionId)
    setOpen(false)
  }

  return (
    <header className="navbar">
      <div className="nav-inner container">
        <button className="brand-button" type="button" onClick={() => goTo('home')}>
          <Logo />
        </button>
        <nav className={open ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Κύρια πλοήγηση">
          {links.map(([sectionId, label]) => (
            <button className={currentSection === sectionId ? 'nav-link nav-link-active' : 'nav-link'} type="button" key={sectionId} onClick={() => goTo(sectionId)}>
              {label}
            </button>
          ))}
        </nav>
        <a className="nav-phone" href="tel:+306970513826">
          <PhoneCall size={18} />
          6970513826
        </a>
        <button className="menu-button" type="button" aria-label={open ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
