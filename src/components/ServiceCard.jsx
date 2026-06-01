export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="service-card reveal">
      <div className="service-icon"><Icon size={28} strokeWidth={1.9} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  )
}
