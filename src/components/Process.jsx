import { ClipboardCheck, Crosshair, FileCheck2, SearchCheck } from 'lucide-react'

const steps = [
  ['01', 'Αυτοψία στον χώρο', 'Ο τεχνικός ελέγχει πού εμφανίζεται το πρόβλημα, σε ποια σημεία υπάρχει δραστηριότητα και τι μπορεί να το συντηρεί.', SearchCheck],
  ['02', 'Επιλογή μεθόδου', 'Ανάλογα με το παράσιτο και τη χρήση του χώρου επιλέγεται gel, ψεκασμός, δολωματικοί σταθμοί ή απολύμανση.', Crosshair],
  ['03', 'Υπεύθυνη εφαρμογή', 'Η εργασία γίνεται με επαγγελματικά σκευάσματα, προσοχή σε τρόφιμα, παιδιά, κατοικίδια και ευαίσθητες επιφάνειες.', ClipboardCheck],
  ['04', 'Οδηγίες μετά την εργασία', 'Μετά την εφαρμογή εξηγούμε τι πρέπει να προσέξετε και παραδίδεται το σχετικό πιστοποιητικό εργασιών.', FileCheck2],
]

export default function Process() {
  return (
    <section className="section-pad process-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Πώς Δουλεύουμε</p>
          <h2>Κάθε εφαρμογή ξεκινά με σωστή εκτίμηση του χώρου</h2>
          <p>Η αντιμετώπιση προσαρμόζεται στο είδος του παρασίτου, την έκταση της προσβολής και τις ανάγκες του χώρου.</p>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, text, Icon]) => (
            <article className="process-card" key={title}>
              <span>{number}</span>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
