import { useState } from 'react'
import { MapPin, PhoneCall } from 'lucide-react'

const WEB3FORMS_ACCESS_KEY = '174b55b1-9d07-4c9d-89c9-7d44add2820a'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('submitting')
    setMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'Νέο αίτημα προσφοράς - Terminal Pest Control Solutions')
    formData.append('from_name', 'Terminal Pest Control Solutions')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Η αποστολή απέτυχε')
      }

      form.reset()
      setStatus('success')
      setMessage('Το αίτημά σας στάλθηκε. Θα επικοινωνήσουμε μαζί σας το συντομότερο.')
    } catch {
      setStatus('error')
      setMessage('Δεν έγινε αποστολή. Παρακαλούμε δοκιμάστε ξανά ή καλέστε στο 6970513826.')
    }
  }

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Επικοινωνία</p>
          <h2>Στείλτε μας τι συμβαίνει στον χώρο σας</h2>
          <p>Πείτε μας τι είδατε, σε ποια περιοχή βρίσκεστε και αν πρόκειται για κατοικία, πολυκατοικία ή επαγγελματικό χώρο.</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-card"><MapPin size={24} /><div><h3>Διεύθυνση</h3><p>Λυκούργου 42, Νέα Ιωνία 142 31, Αθήνα</p></div></div>
            <div className="contact-card"><PhoneCall size={24} /><div><h3>Τηλέφωνο</h3><p><a href="tel:+306970513826">6970513826</a></p></div></div>
            <iframe className="map-frame" title="Χάρτης Terminal Pest Control Solutions" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=%CE%9B%CF%85%CE%BA%CE%BF%CF%8D%CF%81%CE%B3%CE%BF%CF%85%2042%2C%20%CE%9D%CE%AD%CE%B1%20%CE%99%CF%89%CE%BD%CE%AF%CE%B1%20142%2031%2C%20%CE%91%CE%B8%CE%AE%CE%BD%CE%B1&output=embed" />
          </div>
          <form className="quote-form" onSubmit={handleSubmit}>
            <input type="checkbox" name="botcheck" className="hidden-field" tabIndex="-1" autoComplete="off" />
            <label>Ονοματεπώνυμο<input type="text" name="name" autoComplete="name" required /></label>
            <label>Τηλέφωνο<input type="tel" name="phone" autoComplete="tel" required /></label>
            <label>Email<input type="email" name="email" autoComplete="email" /></label>
            <label>Υπηρεσία<select name="service" defaultValue=""><option value="" disabled>Επιλέξτε υπηρεσία</option><option>Απεντόμωση</option><option>Μυοκτονία</option><option>Απολύμανση</option><option>Άλλο</option></select></label>
            <label className="form-full">Περιγραφή προβλήματος<textarea name="message" rows="5" required /></label>
            <button className="button button-primary form-full" type="submit" disabled={status === 'submitting'}>{status === 'submitting' ? 'Αποστολή...' : 'Ζητήστε Προσφορά'}</button>
            {message && <p className={`form-status form-status-${status}`}>{message}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
