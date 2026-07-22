import { useState } from 'react'
import { submitLead } from '../api/client.js'
import { OBJECT_TYPES, COMPANY } from '../data/content.js'

const EMPTY = { name: '', phone: '', object_type: OBJECT_TYPES[0], message: '' }

export default function LeadForm() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [error, setError] = useState('')

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setError('')
    try {
      await submitLead(form)
      setStatus('success')
      setForm(EMPTY)
    } catch (err) {
      setStatus('error')
      setError(err.message || 'Не удалось отправить заявку. Попробуйте позже.')
    }
  }

  if (status === 'success') {
    return (
      <div className="form">
        <div className="alert alert-success">
          ✓ Заявка отправлена. Мы свяжемся с вами в течение рабочего дня.
        </div>
        <button className="btn btn-ghost" onClick={() => setStatus('idle')}>
          Отправить ещё одну
        </button>
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      {status === 'error' && <div className="alert alert-error">{error}</div>}

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
        <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Отправляем…' : 'Получить точный расчёт'}
        </button>
        <a
          href={COMPANY.whatsapp}
          className="btn btn-whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Написать в WhatsApp
        </a>
      </div>

      <p className="form-note">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
      </p>
    </form>
  )
}
