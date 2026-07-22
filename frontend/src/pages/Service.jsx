import { SERVICE_POINTS } from '../data/content.js'
import CtaBand from '../components/CtaBand.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import Certificates from '../components/Certificates.jsx'

export default function Service() {
  return (
    <>
      <section className="section page-head">
        <div className="container">
          <div className="section-tag">Сервис</div>
          <h2>Сервис и поддержка после запуска</h2>
          <StatsStrip compact />
          <div className="split">
            <div>
              <p className="lead">
                Мы не завершаем работу после монтажа. Сопровождаем объект и отвечаем за работу
                лифтов.
              </p>
              <ul className="checks">
                {SERVICE_POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="media-frame">
              <img
                src="/photos/feature-safety-tech.jpg"
                alt="Специалист Eurasia Lift KZ настраивает систему безопасности лифта"
                loading="lazy"
                width="646"
                height="1024"
              />
            </div>
          </div>
        </div>
      </section>

      <Certificates />

      <CtaBand title="Возьмём ваши лифты на обслуживание" />
    </>
  )
}
