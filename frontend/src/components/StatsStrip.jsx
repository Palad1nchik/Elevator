import { STATS } from '../data/content.js'

export default function StatsStrip({ compact = false }) {
  return (
    <div className={`stats ${compact ? 'stats-compact' : ''}`}>
      {STATS.map((s) => (
        <div className="stat" key={s.label}>
          <div className="num">{s.num}</div>
          <div className="label">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
