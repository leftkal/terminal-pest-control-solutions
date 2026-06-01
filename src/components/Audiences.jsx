import { Building2, Home, Hotel, Store, Utensils } from 'lucide-react'

const audiences = [
  ['Κατοικίες', 'Διαμερίσματα και μονοκατοικίες με προσοχή σε παιδιά, κατοικίδια, τρόφιμα και καθημερινή χρήση του χώρου.', Home],
  ['Πολυκατοικίες', 'Φρεάτια, υπόγεια, αποθήκες, πυλωτές, λεβητοστάσια και κλιμακοστάσια που συχνά γίνονται εστίες.', Building2],
  ['Airbnb & Ενοικιαζόμενα', 'Γρήγορος προγραμματισμός ανάμεσα σε κρατήσεις και πιστοποιητικό εφαρμογής για το αρχείο του ακινήτου.', Hotel],
  ['Καταστήματα Εστίασης', 'Εφαρμογές με σεβασμό στους χώρους τροφίμων, στον εξοπλισμό και στις απαιτήσεις υγειονομικού ελέγχου.', Utensils],
  ['Γραφεία & Επιχειρήσεις', 'Προληπτικό πρόγραμμα ή άμεση επέμβαση με συνεννόηση για ώρες που εξυπηρετούν τη λειτουργία σας.', Store],
]

export default function Audiences() {
  return (
    <section className="section-pad audience-section">
      <div className="container audience-grid">
        <div className="section-heading section-heading-left">
          <p className="eyebrow">Σε ποιους απευθυνόμαστε</p>
          <h2>Κάθε χώρος έχει διαφορετική χρήση και διαφορετική ευθύνη</h2>
          <p>Άλλη προετοιμασία χρειάζεται ένα σπίτι με κατοικίδιο, άλλη μια πολυκατοικία με φρεάτια και άλλη μια κουζίνα επαγγελματικού χώρου.</p>
        </div>
        <div className="audience-list">
          {audiences.map(([title, text, Icon]) => (
            <article className="audience-item" key={title}>
              <Icon size={24} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
