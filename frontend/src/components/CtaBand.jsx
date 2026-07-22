import { Link } from 'react-router-dom'
import { COMPANY } from '../data/content.js'

// Reusable call-to-action banner used at the bottom of most pages.
export default function CtaBand({
  title = 'Рассчитаем сроки и стоимость за 5-7 дней',
  text = 'Даём точный расчёт сроков и стоимости под ваш объект.',
}) {
  return (
    <section className="container">
      <div className="cta-band">
        <h2>{title}</h2>
        <p className="lead" style={{ margin: '0 auto' }}>
          {text}
        </p>
        <div className="actions">
          <Link to="/kontakty" className="btn btn-primary">
            Получить точный расчёт
          </Link>
          <a
            href={COMPANY.whatsapp}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
