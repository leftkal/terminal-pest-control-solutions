const areas = ['Νέα Ιωνία', 'Αθήνα', 'Μαρούσι', 'Χαλάνδρι', 'Κηφισιά', 'Πειραιάς', 'Γλυφάδα', 'Ηλιούπολη', 'Περιστέρι', 'Νέα Σμύρνη', 'Βύρωνας', 'Παλλήνη', 'κ.α.']

export default function Coverage() {
  return (
    <section id="coverage" className="section-pad coverage-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Περιοχές Εξυπηρέτησης</p>
          <h2>Εξυπηρέτηση σε Αθήνα και γύρω περιοχές</h2>
          <p>Με αφετηρία τη Νέα Ιωνία, αναλαμβάνουμε ραντεβού σε κέντρο, βόρεια, νότια, δυτικά προάστια και Πειραιά.</p>
        </div>
        <div className="coverage-pills" aria-label="Περιοχές εξυπηρέτησης">{areas.map((area) => <span className="pill" key={area}>{area}</span>)}</div>
      </div>
    </section>
  )
}
