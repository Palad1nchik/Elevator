import { Link } from 'react-router-dom'
import { AUDIENCES, PILLARS, STEPS } from '../data/content.js'
import CtaBand from '../components/CtaBand.jsx'
import AdvantagesGrid from '../components/AdvantagesGrid.jsx'
import ObjectsTeaser from '../components/ObjectsTeaser.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import Certificates from '../components/Certificates.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot" />
              Официальный представитель KASPER в Казахстане
            </span>
            <h1>Лифты под ключ для ЖК и коммерческих объектов. Сдаём в срок.</h1>
            <p className="lead">
              Поставка, монтаж и запуск под ключ — без срывов сроков. Собственный склад
              оборудования и запчастей в Казахстане: оперативная замена без ожидания поставок.
            </p>
            <div className="hero-actions">
              <Link to="/kontakty" className="btn btn-primary">
                Получить расчёт
              </Link>
              <Link to="/kontakty" className="btn btn-ghost">
                Назначить встречу
              </Link>
            </div>
          </div>

          <div className="hero-photo">
            <img
              src="/photos/feature-hero-shaft.jpg"
              alt="Лифт KASPER в шахте жилого комплекса"
              loading="eager"
              fetchPriority="high"
              width="614"
              height="1024"
            />
          </div>
        </div>

        <div className="container">
          <StatsStrip />
        </div>
      </section>

      <ObjectsTeaser />

      <section className="section">
        <div className="container">
          <div className="section-tag">Что мы делаем</div>
          <h2>Полный цикл лифтового оснащения объекта</h2>
          <div className="grid grid-3">
            {PILLARS.map((p) => (
              <div className="card" key={p.idx}>
                <div className="idx">{p.idx}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-tag">Для кого</div>
          <h2>Работаем с объектами любого масштаба</h2>
          <div className="grid grid-3">
            {AUDIENCES.map((a) => (
              <div className="card" key={a.idx}>
                <div className="idx">{a.idx}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <p className="lead" style={{ marginTop: 28 }}>
            Фиксируем сроки и доводим до запуска.{' '}
            <Link to="/dlya-kogo" style={{ color: 'var(--accent-bright)' }}>
              Как мы работаем →
            </Link>
          </p>
        </div>
      </section>

      <AdvantagesGrid />

      <Certificates />

      <section className="section">
        <div className="container">
          <div className="section-tag">Как мы работаем</div>
          <h2>Монтаж лифтов под ключ без срывов сроков</h2>
          <p className="lead">Вы видите сроки и результат на каждом этапе.</p>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <CtaBand />
    </>
  )
}
