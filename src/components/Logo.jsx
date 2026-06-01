export default function Logo({ dark = false }) {
  return (
    <span className="logo" aria-label="Terminal Pest Control Solutions">
      <img className="logo-mark" src="/terminal-icon.png" alt="" />
      <span className={dark ? 'logo-text logo-text-dark' : 'logo-text'}>
        <strong>Terminal</strong>
        <small>Pest Control Solutions</small>
      </span>
    </span>
  )
}
