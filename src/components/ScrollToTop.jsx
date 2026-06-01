import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const sectionIds = new Set(['home', 'services', 'why-us', 'coverage', 'contact'])

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    const sectionId = pathname.replace(/^\//, '') || 'home'
    const targetId = sectionIds.has(sectionId) ? sectionId : 'home'

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })
    })
  }, [pathname])

  return null
}
