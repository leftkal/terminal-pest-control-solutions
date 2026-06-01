import Logo from './Logo.jsx'

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><Logo dark /><p>Υγειονομικές εφαρμογές, απεντομώσεις, απολυμάνσεις και μυοκτονίες σε Αθήνα και Αττική.</p></div>
        <div><h2>Υπηρεσίες</h2><button type="button" onClick={() => onNavigate('services')}>Απεντόμωση</button><button type="button" onClick={() => onNavigate('services')}>Μυοκτονία</button><button type="button" onClick={() => onNavigate('services')}>Απολύμανση</button></div>
        <div><h2>Επικοινωνία</h2><a href="tel:+306970513826">6970513826</a><p>Λυκούργου 42, Νέα Ιωνία 142 31</p></div>
      </div>
      <div className="footer-bottom">© 2026 Terminal Pest Control Solutions</div>
    </footer>
  )
}
