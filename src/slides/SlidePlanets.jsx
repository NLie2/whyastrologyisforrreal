export default function SlidePlanets() {
  const planets = [
    { name: 'Sun', god: 'Apollo / Helios', color: '#EF9F27', type: 'sun',
      reason: 'The most luminous object — source of light, life, warmth. Vitality, ego, the conscious self.' },
    { name: 'Moon', god: 'Artemis / Selene', color: '#B4B2A9', type: 'moon',
      reason: 'Governs the tides and the night. Emotions, intuition, the unconscious, cycles of change.' },
    { name: 'Mercury', god: 'Hermes', color: '#85B7EB', type: 'mercury',
      reason: 'Fastest planet — darts close to the Sun. Messenger god: communication, wit, trickery.' },
    { name: 'Venus', god: 'Aphrodite', color: '#ED93B1', type: 'venus',
      reason: 'Brightest object after Sun & Moon. "Evening star" and "morning star." Love, beauty, harmony.' },
    { name: 'Mars', god: 'Ares', color: '#E24B4A', type: 'mars',
      reason: 'Visibly red — blood and fire. God of war: aggression, drive, courage, conflict.' },
    { name: 'Jupiter', god: 'Zeus', color: '#EF9F27', type: 'jupiter',
      reason: 'Largest planet — king of the sky. Expansion, abundance, wisdom, authority, fortune.' },
    { name: 'Saturn', god: 'Kronos', color: '#888780', type: 'saturn',
      reason: 'Slowest visible planet (~29yr orbit). Father Time: structure, limitation, discipline.' },
    { name: 'Uranus · Neptune · Pluto', god: 'Modern (1781, 1846, 1930)', color: '#7F77DD', type: 'outer',
      reason: 'Discovered with telescopes. Revolution, dreams, transformation.' },
  ]

  function renderPlanet(type, x, y, s) {
    switch (type) {
      case 'sun':
        return (
          <g>
            <circle cx={x} cy={y} r={s} fill="#EF9F27" opacity="0.9" />
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i / 8) * Math.PI * 2
              return <line key={i} x1={x + (s + 2) * Math.cos(a)} y1={y + (s + 2) * Math.sin(a)}
                x2={x + (s + 7) * Math.cos(a)} y2={y + (s + 7) * Math.sin(a)} stroke="#EF9F27" strokeWidth="2" opacity="0.5" />
            })}
          </g>
        )
      case 'moon':
        return <g><circle cx={x} cy={y} r={s} fill="#e0ddd5" /><circle cx={x + s * 0.35} cy={y - s * 0.15} r={s * 0.75} fill="var(--bg-card)" /></g>
      case 'mercury':
        return <circle cx={x} cy={y} r={s * 0.65} fill="#85B7EB" opacity="0.8" />
      case 'venus':
        return <circle cx={x} cy={y} r={s * 0.8} fill="#ED93B1" opacity="0.85" />
      case 'mars':
        return <circle cx={x} cy={y} r={s * 0.7} fill="#E24B4A" opacity="0.85" />
      case 'jupiter':
        return <g>
          <circle cx={x} cy={y} r={s} fill="#d4a44e" opacity="0.8" />
          <line x1={x - s * 0.6} y1={y - s * 0.25} x2={x + s * 0.6} y2={y - s * 0.25} stroke="#b8883a" strokeWidth="1.5" opacity="0.4" />
          <line x1={x - s * 0.6} y1={y + s * 0.15} x2={x + s * 0.6} y2={y + s * 0.15} stroke="#b8883a" strokeWidth="1" opacity="0.3" />
        </g>
      case 'saturn':
        return <g>
          <circle cx={x} cy={y} r={s * 0.65} fill="#b0a890" opacity="0.8" />
          <ellipse cx={x} cy={y} rx={s * 1.1} ry={s * 0.25} fill="none" stroke="#b0a890" strokeWidth="1.5" opacity="0.5" transform={`rotate(-15, ${x}, ${y})`} />
        </g>
      case 'outer':
        return <g>
          <circle cx={x - 10} cy={y} r={s * 0.45} fill="#7F77DD" opacity="0.6" />
          <circle cx={x + 2} cy={y} r={s * 0.55} fill="#5A8FCC" opacity="0.5" />
          <circle cx={x + 12} cy={y} r={s * 0.4} fill="#9B7FBB" opacity="0.6" />
        </g>
      default:
        return <circle cx={x} cy={y} r={s} fill="#888" />
    }
  }

  return (
    <>
      <h2>Planets & Their Gods</h2>
      <h3>Why each planet got its divine association</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, flex: 1 }}>
        {planets.map((p, i) => (
          <div key={i} className="card" style={{ textAlign: 'center', borderColor: `${p.color}25`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, padding: '18px 14px' }}>
            <svg viewBox="0 0 60 60" style={{ width: 52, height: 52 }}>
              {renderPlanet(p.type, 30, 30, 18)}
            </svg>
            <div style={{ fontSize: 18, color: 'var(--accent)', fontWeight: 500 }}>{p.name}</div>
            <div style={{ fontSize: 14, color: 'var(--text)' }}>{p.god}</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.5, marginTop: 4 }}>{p.reason}</div>
          </div>
        ))}
      </div>
    </>
  )
}
