import LeadForm from '../components/LeadForm.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import { COMPANY } from '../data/content.js'

export default function Contact() {
  return (
    <section className="section page-head">
      <div className="container">
        <div className="section-tag">Заявка</div>
        <h2>Рассчитаем сроки и стоимость за 1 день</h2>
        <p className="lead">
          Даём точный расчёт сроков и стоимости под ваш объект.
        </p>
        <StatsStrip compact />

        <div className="split" style={{ alignItems: 'start' }}>
          <LeadForm />

          <div className="panel">
            <div className="media-frame" style={{ marginBottom: 20 }}>
              <img
                src="/photos/feature-team-review.jpg"
                alt="Команда KASPER Lift Solutions на объекте"
                loading="lazy"
                width="646"
                height="1024"
              />
            </div>
            <h3 style={{ fontSize: 20, marginBottom: 14 }}>Контакты</h3>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 16px' }}>
              Отвечаем в течение рабочего дня. Зафиксируем сроки в договоре и доведём до запуска.
            </p>
            <div style={{ display: 'grid', gap: 10 }}>
              <span>📍 {COMPANY.address}</span>
              <a href={COMPANY.phoneHref}>📞 {COMPANY.phone}</a>
              <a href={COMPANY.emailHref}>✉️ {COMPANY.email}</a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
                💬 WhatsApp
              </a>
            </div>
            <ul className="checks" style={{ marginTop: 22 }}>
              <li>Отвечаем за сроки в договоре</li>
              <li>Доводим до запуска</li>
              <li>Не переделываем</li>
              <li>Остаёмся на связи</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <MapEmbed />
        </div>
      </div>
    </section>
  )
}
