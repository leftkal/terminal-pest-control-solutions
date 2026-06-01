import { BedDouble, Bug, Droplets, Rat, ShieldCheck, SprayCan } from 'lucide-react'
import ServiceCard from './ServiceCard.jsx'

const services = [
  ['Απεντόμωση', 'Εφαρμογές σε κατοικίες, κοινόχρηστους χώρους και επιχειρήσεις για κατσαρίδες, μυρμήγκια, ψύλλους, κοριούς και άλλα έντομα.', Bug],
  ['Μυοκτονία', 'Τοποθέτηση δολωματικών σταθμών, έλεγχος περασμάτων και παρακολούθηση της δραστηριότητας ποντικών ή αρουραίων.', Rat],
  ['Απολύμανση', 'Εφαρμογές μικροβιοκτονίας σε χώρους που χρειάζονται υγειονομική φροντίδα, μετά από χρήση ή πριν από επαναλειτουργία.', ShieldCheck],
  ['Κατσαρίδες', 'Gel σε κουζίνες και μπάνια, ψεκασμός σε φρεάτια και σημεία διέλευσης, με οδηγίες για την επόμενη ημέρα.', SprayCan],
  ['Κουνούπια & Μύγες', 'Έλεγχος στάσιμων νερών, σιφωνιών, κήπων και εξωτερικών σημείων όπου αναπτύσσονται οι πληθυσμοί.', Droplets],
  ['Ψύλλοι & Κοριοί', 'Εργασία σε στρώματα, υφάσματα, σοβατεπί και κρυφά σημεία, με πιθανό επανέλεγχο ανάλογα με την προσβολή.', BedDouble],
]

export default function Services() {
  return (
    <section id="services" className="section-pad services-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Υπηρεσίες</p>
          <h2>Υγειονομικές εφαρμογές για σπίτια, πολυκατοικίες και επαγγελματικούς χώρους</h2>
          <p>Η εφαρμογή αποφασίζεται μετά τον έλεγχο του χώρου, το είδος του παρασίτου και την ένταση του προβλήματος.</p>
        </div>
        <div className="services-grid">
          {services.map(([title, text, Icon]) => <ServiceCard key={title} title={title} text={text} icon={Icon} />)}
        </div>
      </div>
    </section>
  )
}
