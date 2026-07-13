import { Link } from 'react-router-dom'
import { OBJECTS } from '../data/content.js'
import ObjectsSlider from './ObjectsSlider.jsx'

export default function ObjectsTeaser() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-tag">Опыт</div>
        <h2>Реализованные объекты</h2>
        <p className="lead">95% объектов сдаём без замечаний по лифтам.</p>
        <ObjectsSlider items={OBJECTS.slice(0, 8)} />
        <p className="lead" style={{ marginTop: 28 }}>
          <Link to="/obyekty" style={{ color: 'var(--accent-bright)' }}>
            Смотреть все объекты →
          </Link>
        </p>
      </div>
    </section>
  )
}
