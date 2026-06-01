import { BadgeCheck, Clock3, FlaskConical, ShieldCheck } from 'lucide-react'

const items = [
  ['Άμεση Εξυπηρέτηση', 'Κλείνουμε ραντεβού γρήγορα, εξηγούμε την προετοιμασία και ενημερώνουμε για τον χρόνο της εργασίας.', Clock3],
  ['Υπεύθυνος Γεωπόνος', 'Η επιλογή μεθόδου και σκευασμάτων γίνεται με επίβλεψη γεωπόνου και σύμφωνα με τις ανάγκες του χώρου.', BadgeCheck],
  ['Εγκεκριμένα Σκευάσματα', 'Χρησιμοποιούνται επαγγελματικά προϊόντα με άδεια κυκλοφορίας και σαφείς οδηγίες για ανθρώπους και ζώα.', FlaskConical],
  ['Πιστοποιητικό & Διαδικασίες ISO', 'Μετά την εργασία παραδίδεται πιστοποιητικό εφαρμογής και τηρείται οργανωμένο αρχείο εργασιών.', ShieldCheck],
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad why-section">
      <div className="container why-grid">
        <div className="section-heading section-heading-left">
          <p className="eyebrow">Γιατί Terminal;</p>
          <h2>Σωστή εφαρμογή, καθαρές οδηγίες και υπεύθυνη παρακολούθηση</h2>
          <p>Ο τεχνικός δεν φεύγει απλώς μετά την εφαρμογή. Εξηγεί τι έγινε, τι πρέπει να αποφευχθεί και πότε χρειάζεται επανέλεγχος.</p>
        </div>
        <div className="why-list">
          {items.map(([title, text, Icon]) => <article className="why-item" key={title}><Icon size={26} /><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </div>
    </section>
  )
}
