import { COMPANY, MAP } from '../data/content.js'

// OpenStreetMap embed — free, no API key, no account, and (unlike 2GIS's
// embeddable widget) not blocked by X-Frame-Options on 2gis.kz or gateway
// filtering on widgets.2gis.com. Always renders.
const EMBED_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=${MAP.bbox}&layer=mapnik&marker=${MAP.lat},${MAP.lon}`

export default function MapEmbed() {
  return (
    <div>
      <iframe
        className="map-embed"
        title="Карта - как нас найти"
        src={EMBED_SRC}
        loading="lazy"
      />
      <p className="lead" style={{ margin: '14px 0 0' }}>
        {COMPANY.address}
        {' - '}
        <a href={MAP.openLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-bright)' }}>
          открыть карту крупнее →
        </a>
      </p>
    </div>
  )
}
