export default function SlideDays() {
  const days = [
    { day: 'Sunday', planet: 'Sun', god: 'Sol / Helios', color: '#EF9F27', bodyColor: '#EF9F27', bodyType: 'sun' },
    { day: 'Monday', planet: 'Moon', god: 'Luna / Selene', color: '#B4B2A9', bodyColor: '#e0ddd5', bodyType: 'moon' },
    { day: 'Tuesday', planet: 'Mars', god: 'Tyr / Ares', color: '#E24B4A', bodyColor: '#E24B4A', bodyType: 'mars' },
    { day: 'Wednesday', planet: 'Mercury', god: 'Woden / Hermes', color: '#85B7EB', bodyColor: '#85B7EB', bodyType: 'mercury' },
    { day: 'Thursday', planet: 'Jupiter', god: 'Thor / Zeus', color: '#EF9F27', bodyColor: '#d4a44e', bodyType: 'jupiter' },
    { day: 'Friday', planet: 'Venus', god: 'Freya / Aphrodite', color: '#ED93B1', bodyColor: '#ED93B1', bodyType: 'venus' },
    { day: 'Saturday', planet: 'Saturn', god: 'Saturn / Kronos', color: '#888780', bodyColor: '#b0a890', bodyType: 'saturn' },
  ]

  const cx = 340, cy = 320, r = 230

  // Render a small planet visualization
  function renderBody(type, x, y, size) {
    const s = size
    switch (type) {
      case 'sun':
        return (
          <g>
            <circle cx={x} cy={y} r={s} fill="#EF9F27" opacity="0.9" />
            {/* Rays */}
            {Array.from({ length: 8 }).map((_, i) => {
              const a = (i / 8) * Math.PI * 2
              const x1 = x + (s + 3) * Math.cos(a)
              const y1 = y + (s + 3) * Math.sin(a)
              const x2 = x + (s + 9) * Math.cos(a)
              const y2 = y + (s + 9) * Math.sin(a)
              return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#EF9F27" strokeWidth="2" opacity="0.6" />
            })}
          </g>
        )
      case 'moon':
        return (
          <g>
            <circle cx={x} cy={y} r={s} fill="#e0ddd5" />
            <circle cx={x + s * 0.35} cy={y - s * 0.15} r={s * 0.75} fill="var(--bg)" />
          </g>
        )
      case 'mars':
        return <circle cx={x} cy={y} r={s} fill="#E24B4A" opacity="0.85" />
      case 'mercury':
        return <circle cx={x} cy={y} r={s * 0.7} fill="#85B7EB" opacity="0.8" />
      case 'jupiter':
        return (
          <g>
            <circle cx={x} cy={y} r={s} fill="#d4a44e" opacity="0.8" />
            <line x1={x - s * 0.7} y1={y - s * 0.3} x2={x + s * 0.7} y2={y - s * 0.3} stroke="#c4944e" strokeWidth="1.5" opacity="0.5" />
            <line x1={x - s * 0.7} y1={y + s * 0.2} x2={x + s * 0.7} y2={y + s * 0.2} stroke="#c4944e" strokeWidth="1" opacity="0.4" />
          </g>
        )
      case 'venus':
        return <circle cx={x} cy={y} r={s * 0.85} fill="#ED93B1" opacity="0.85" />
      case 'saturn':
        return (
          <g>
            <circle cx={x} cy={y} r={s * 0.7} fill="#b0a890" opacity="0.8" />
            <ellipse cx={x} cy={y} rx={s * 1.2} ry={s * 0.3} fill="none" stroke="#b0a890" strokeWidth="1.5" opacity="0.6" transform={`rotate(-15, ${x}, ${y})`} />
          </g>
        )
      default:
        return <circle cx={x} cy={y} r={s} fill="#888" />
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <h2>Days of the Week</h2>
      <h3 style={{ marginBottom: 10 }}>Named after the seven classical planets and their gods</h3>

      <svg viewBox="0 0 680 640" style={{ width: '100%', maxWidth: 700, flex: 1 }}>
        {/* Background circles */}
        <circle cx={cx} cy={cy} r={r + 30} fill="none" stroke="rgba(201,168,76,0.08)" strokeWidth="1" />
        <circle cx={cx} cy={cy} r={r - 50} fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />

        {days.map((d, i) => {
          const angle = (i / 7) * Math.PI * 2 - Math.PI / 2
          const x = cx + r * Math.cos(angle)
          const y = cy + r * Math.sin(angle)
          // Label position — further out
          const lx = cx + (r + 70) * Math.cos(angle)
          const ly = cy + (r + 70) * Math.sin(angle)

          return (
            <g key={i}>
              {/* Connecting line to center */}
              <line x1={cx} y1={cy} x2={x} y2={y} stroke={d.color} strokeWidth="0.5" opacity="0.15" />
              {/* Node glow */}
              <circle cx={x} cy={y} r={38} fill={d.color} opacity="0.08" />
              <circle cx={x} cy={y} r={38} fill="none" stroke={d.color} strokeWidth="1.5" opacity="0.4" />
              {/* Planet body */}
              {renderBody(d.bodyType, x, y, 16)}
              {/* Day name + planet + god outside */}
              <text x={lx} y={ly - 24} textAnchor="middle" dominantBaseline="central"
                fontSize="22" fill={d.color} fontWeight="500">{d.day}</text>
              <text x={lx} y={ly + 2} textAnchor="middle" fontSize="18" fill="var(--text)">{d.planet}</text>
              <text x={lx} y={ly + 24} textAnchor="middle" fontSize="15" fill="var(--text-muted)">{d.god}</text>
            </g>
          )
        })}

        {/* Center label */}
        <text x={cx} y={cy - 12} textAnchor="middle" fontSize="24" fill="var(--text)" fontFamily="'Playfair Display', Georgia, serif">Seven</text>
        <text x={cx} y={cy + 18} textAnchor="middle" fontSize="24" fill="var(--text)" fontFamily="'Playfair Display', Georgia, serif">Planets</text>
      </svg>
    </div>
  )
}
