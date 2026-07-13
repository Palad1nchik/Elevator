import { useRef } from 'react'

export default function ObjectsSlider({ items }) {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.slider-card')
    const step = card ? card.getBoundingClientRect().width + 20 : 320
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <div className="slider">
      <div className="slider-track" ref={trackRef}>
        {items.map((o) => (
          <article className="slider-card" key={o.name}>
            <div className="slider-card-img">
              <img src={o.img} alt={o.name} loading="lazy" />
            </div>
            <h3>{o.name}</h3>
          </article>
        ))}
      </div>
      <div className="slider-controls">
        <button type="button" className="slider-btn" onClick={() => scroll(-1)} aria-label="Назад">
          ←
        </button>
        <button type="button" className="slider-btn" onClick={() => scroll(1)} aria-label="Вперёд">
          →
        </button>
      </div>
    </div>
  )
}
