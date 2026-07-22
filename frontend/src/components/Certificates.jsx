import { CERTIFICATES } from '../data/content.js'

export default function Certificates() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-tag">Документы</div>
        <h2>Сертификаты и аттестаты</h2>
        <p className="lead">
          Официальные документы, подтверждающие статус дилера KASPER и право на монтаж и
          техническое обслуживание лифтов, эскалаторов и траволаторов в Казахстане.
        </p>
        <div className="grid grid-3 doc-grid">
          {CERTIFICATES.map((c) => (
            <a
              key={c.title}
              href={c.file || c.image}
              target="_blank"
              rel="noopener noreferrer"
              className="card doc-card"
            >
              <div className="doc-card-image">
                <img src={c.image} alt={c.title} loading="lazy" />
              </div>
              <h3>{c.title}</h3>
              <p>
                {[c.issuer, c.number && `№ ${c.number}`, c.issued && `выдан ${c.issued}`, c.validity]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
              <span className="doc-card-link">Смотреть документ →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
