export default function Logo({ dark = false }) {
  const iconUrl = `${import.meta.env.BASE_URL}terminal-icon.png`

  return (
    <span className="logo" aria-label="Terminal Pest Control Solutions">
      <img className="logo-mark" src={iconUrl} alt="" />
      <span className={dark ? 'logo-text logo-text-dark' : 'logo-text'}>
        <strong>Terminal</strong>
        <small>Pest Control Solutions</small>
      </span>
    </span>
  )
}
