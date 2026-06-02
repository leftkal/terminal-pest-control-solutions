import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const sectionIds = new Set(['home', 'services', 'why-us', 'coverage', 'contact'])

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const sectionId = pathname.replace(/^\//, '') || 'home'
    const targetId = sectionIds.has(sectionId) ? sectionId : 'home'

    window.requestAnimationFrame(() => {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      const section = document.getElementById(targetId)
      const navHeight = document.querySelector('.navbar')?.offsetHeight || 0

      if (section) {
        const top = section.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
      }
    })
  }, [pathname])

  return null
}
