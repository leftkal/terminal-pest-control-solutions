import { useEffect } from 'react'
import { ExternalLink, MessageSquareText, Star } from 'lucide-react'

const ELFSIGHT_APP_ID = 'c17c65e7-5e79-4391-a0d8-8bc899fe6220'
const googleReviewsUrl = 'https://www.google.com/search?q=Terminal+Pest+Control+Solutions+%CE%9B%CF%85%CE%BA%CE%BF%CF%8D%CF%81%CE%B3%CE%BF%CF%85+42+%CE%9D%CE%AD%CE%B1+%CE%99%CF%89%CE%BD%CE%AF%CE%B1'

export default function ElfsightReviews() {
  const hasWidgetId = ELFSIGHT_APP_ID !== 'YOUR_ELFSIGHT_APP_ID'

  useEffect(() => {
    if (!hasWidgetId) return

    const scriptSrc = 'https://elfsightcdn.com/platform.js'
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.async = true
      document.body.appendChild(script)
    }
  }, [hasWidgetId])

  if (hasWidgetId) {
    return (
      <aside className="google-reviews-widget elfsight-widget reveal reveal-delay" aria-label="Αξιολογήσεις Google">
        <div className={`elfsight-app-${ELFSIGHT_APP_ID}`} data-elfsight-app-lazy />
      </aside>
    )
  }

  return (
    <aside className="google-reviews-widget reveal reveal-delay" aria-label="Αξιολογήσεις Google">
      <div className="reviews-header">
        <span className="google-badge">Αξιολογήσεις Google</span>
        <div className="stars stars-muted" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={22} />
          ))}
        </div>
      </div>
      <div className="reviews-body">
        <h2>Σύνδεση με Elfsight</h2>
        <p>
          Δημιουργήστε ένα Google Reviews widget στο Elfsight και αντικαταστήστε το YOUR_ELFSIGHT_APP_ID με το app ID που θα δώσει η πλατφόρμα.
        </p>
      </div>
      <div className="reviews-note">
        <MessageSquareText size={24} />
        <div>
          <strong>Έτοιμο για πραγματικές αξιολογήσεις</strong>
          <span>Μόλις μπει το Elfsight app ID, εδώ θα εμφανίζονται οι κριτικές από το Google Business Profile.</span>
        </div>
      </div>
      <div className="reviews-actions">
        <a className="button button-primary reviews-link" href="https://elfsight.com/google-reviews-widget/" target="_blank" rel="noreferrer">
          Δημιουργία widget στο Elfsight
          <ExternalLink size={18} />
        </a>
        <a className="button button-secondary reviews-link" href={googleReviewsUrl} target="_blank" rel="noreferrer">
          Άνοιγμα Google προφίλ
        </a>
      </div>
    </aside>
  )
}
