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
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
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
