import { ChevronRight, PhoneCall } from 'lucide-react'
import ElfsightReviews from './ElfsightReviews.jsx'

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="hero-section section-pad">
      <div className="container hero-grid">
        <div className="hero-copy hero-copy-panel reveal">
          <p className="eyebrow">Terminal Pest Control Solutions</p>
          <h1>Απεντόμωση, Απολύμανση &amp; Μυοκτονία</h1>
          <p className="hero-subtitle">Υγειονομικές εφαρμογές με υπεύθυνο γεωπόνο, πιστοποιητικό εργασιών και άμεσο ραντεβού.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="tel:+306970513826"><PhoneCall size={20} />Καλέστε Τώρα → 6970513826</a>
            <button className="button button-secondary" type="button" onClick={() => onNavigate('contact')}>Ζητήστε Προσφορά<ChevronRight size={20} /></button>
          </div>
          <ul className="trust-list" aria-label="Σημεία εμπιστοσύνης">
            <li>✓ Πιστοποιητικό εφαρμογής</li>
            <li>✓ Υπεύθυνος γεωπόνος</li>
            <li>✓ Σκευάσματα με άδεια κυκλοφορίας</li>
          </ul>
        </div>
        <ElfsightReviews />
      </div>
    </section>
  )
}
