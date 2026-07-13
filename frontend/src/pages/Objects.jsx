import { OBJECTS, PRODUCTION_POINTS } from '../data/content.js'
import CtaBand from '../components/CtaBand.jsx'
import StatsStrip from '../components/StatsStrip.jsx'
import ObjectsSlider from '../components/ObjectsSlider.jsx'

export default function Objects() {
  return (
    <>
      <section className="section page-head">
        <div className="container">
          <div className="section-tag">Опыт</div>
          <h2>Реализованные объекты</h2>
          <p className="lead">95% объектов сдаём без замечаний по лифтам.</p>
          <StatsStrip compact />

          <ObjectsSlider items={OBJECTS} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-tag">Производство и надёжность</div>
          <h2>Производитель с 80-летней историей</h2>
          <div className="split">
            <div>
              <p className="lead">
                Используем решения KASPER, которые проходят приёмку без проблем.
              </p>
              <ul className="checks">
                {PRODUCTION_POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="media-frame">
              <img
                src="/photos/feature-facade-modern.jpg"
                alt="Современный фасад бизнес-центра с лифтами KASPER"
                loading="lazy"
                width="1071"
                height="630"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Хотите такой же результат на своём объекте?" />
    </>
  )
}
