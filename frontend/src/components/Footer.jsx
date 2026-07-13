import { Link } from 'react-router-dom'
import { COMPANY, NAV } from '../data/content.js'

// Description lines taken from the company business card ("Обсудим ваш объект").
const PITCH = [
  'Дадим точный расчёт сроков и стоимости',
  'Подключимся к проекту и закроем лифтовую часть',
  'Свой собственный склад по запасным частям',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand + pitch */}
        <div className="footer-col footer-brand-col">
          <div className="brand">
            <img src="/logo-mark.png" alt="" className="brand-mark" width="40" height="40" />
            <span className="brand-text">
              {COMPANY.name}
              <small>{COMPANY.tagline}</small>
            </span>
          </div>
          <p className="footer-slogan">Обсудим ваш объект</p>
          <ul className="footer-pitch">
            {PITCH.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4 className="footer-title">Навигация</h4>
          <ul className="footer-nav">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="footer-col">
          <h4 className="footer-title">Контакты</h4>
          <dl className="footer-contacts">
            <dt>Адрес</dt>
            <dd>{COMPANY.address}</dd>
            <dt>Телефон</dt>
            <dd>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
            </dd>
            <dt>Email</dt>
            <dd>
              <a href={COMPANY.emailHref}>{COMPANY.email}</a>
            </dd>
          </dl>
        </div>

        {/* Contact person + CTA */}
        <div className="footer-col">
          <h4 className="footer-title">{COMPANY.contactPerson.role}</h4>
          <p className="footer-person">{COMPANY.contactPerson.name}</p>
          <p>
            <a href={COMPANY.phoneHref}>{COMPANY.contactPerson.phone}</a>
          </p>
          <Link to="/kontakty" className="btn btn-primary" style={{ marginTop: 14 }}>
            Написать и получить расчёт
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        © {COMPANY.year} {COMPANY.name} {COMPANY.tagline}. Эксклюзивный представитель в Казахстане.
      </div>
    </footer>
  )
}
