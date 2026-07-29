import { useState } from 'react'
import { Link } from 'react-router-dom'
import { OBJECT_TYPES, COMPANY } from '../data/content.js'

const EMPTY = { name: '', phone: '', object_type: OBJECT_TYPES[0], message: '' }

function buildWhatsAppLink({ name, phone, object_type, message }) {
  const text = [
    'Заявка с сайта Eurasia Lift KZ',
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Тип объекта: ${object_type}`,
    message && `Комментарий: ${message}`,
  ]
    .filter(Boolean)
    .join('\n')

  return `${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`
}

export default function LeadForm() {
  const [form, setForm] = useState(EMPTY)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    window.open(buildWhatsAppLink(form), '_blank', 'noopener,noreferrer')
    setSent(true)
    setForm(EMPTY)
  }

  if (sent) {
    return (
      <div className="form">
        <div className="alert alert-success">
          ✓ Открываем WhatsApp с вашей заявкой. Если окно не открылось, напишите нам по кнопке ниже.
        </div>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a
            href={COMPANY.whatsapp}
            className="btn btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в WhatsApp
          </a>
          <button className="btn btn-ghost" onClick={() => setSent(false)}>
            Отправить ещё одну
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={update}
          required
          placeholder="Как к вам обращаться"
        />
      </div>

      <div className="field">
        <label htmlFor="phone">Телефон</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={update}
          required
          placeholder="+7 (___) ___-__-__"
        />
      </div>

      <div className="field">
        <label htmlFor="object_type">Тип объекта</label>
        <select id="object_type" name="object_type" value={form.object_type} onChange={update}>
          {OBJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Комментарий</label>
        <textarea
          id="message"
          name="message"
          rows={3}
          value={form.message}
          onChange={update}
          required
          placeholder="Предоставить техническое задание на лифты, для точного расчёта сроков и стоимости"
        />
      </div>

      <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
        <button className="btn btn-primary" type="submit">
          Получить точный расчёт
        </button>
      </div>

      <p className="form-note">
        Нажимая кнопку, вы соглашаетесь с{' '}
        <Link to="/privacy-policy">политикой конфиденциальности</Link>. Заявка будет открыта как
        сообщение в WhatsApp — сайт не хранит и никуда, кроме WhatsApp, её не передаёт.
      </p>
    </form>
  )
}
