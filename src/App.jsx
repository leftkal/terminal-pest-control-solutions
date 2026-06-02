import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Audiences from './components/Audiences.jsx'
import WhyUs from './components/WhyUs.jsx'
import Coverage from './components/Coverage.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const sectionIds = ['home', 'services', 'why-us', 'coverage', 'contact']

function sectionFromPath(pathname) {
  const section = pathname.replace(/^\//, '') || 'home'
  return sectionIds.includes(section) ? section : 'home'
}

function scrollToSectionContent(sectionId) {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const section = document.getElementById(sectionId)
  const target = section?.querySelector('.container') || section
  const navHeight = document.querySelector('.navbar')?.offsetHeight || 0

  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }
}

export default function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const currentSection = useMemo(
    () => sectionFromPath(location.pathname),
    [location.pathname],
  )

  const handleNavigate = (sectionId) => {
    const targetPath = sectionId === 'home' ? '/' : `/${sectionId}`

    if (currentSection === sectionId) {
      scrollToSectionContent(sectionId)
      return
    }

    navigate(targetPath)
  }

  return (
    <div className="site-shell">
      <Navbar currentSection={currentSection} onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <Services />
        <Process />
        <Audiences />
        <WhyUs />
        <Coverage />
        <FAQ />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
      <a className="mobile-call-bar" href="tel:+306970513826">
        Καλέστε Τώρα: 6970513826
      </a>
    </div>
  )
}
