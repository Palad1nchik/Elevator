import { TESTIMONIALS } from '../data/content.js'

export default function Testimonials() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-tag">Отзывы</div>
        <h2>Что говорят клиенты</h2>
        <div className="grid grid-2">
          {TESTIMONIALS.map((t) => (
            <div className="card testimonial-card" key={t.role}>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-role">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
