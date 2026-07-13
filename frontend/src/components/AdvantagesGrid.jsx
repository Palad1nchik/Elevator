import { ADVANTAGES } from '../data/content.js'

export default function AdvantagesGrid({ tag = 'Почему мы', title = 'Почему выбирают KASPER' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-tag">{tag}</div>
        <h2>{title}</h2>
        <div className="grid grid-3">
          {ADVANTAGES.map((a) => (
            <div className="card" key={a.idx}>
              <div className="idx">{a.idx}</div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
