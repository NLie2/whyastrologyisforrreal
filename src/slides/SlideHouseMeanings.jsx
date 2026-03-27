export default function SlideHouseMeanings() {
  const houses = [
    { n: 1, label: 'Self', desc: 'Identity, appearance' },
    { n: 2, label: 'Money', desc: 'Possessions, self-worth' },
    { n: 3, label: 'Communication', desc: 'Siblings, curiosity' },
    { n: 4, label: 'Home', desc: 'Family, roots' },
    { n: 5, label: 'Creativity', desc: 'Romance, play' },
    { n: 6, label: 'Health', desc: 'Routines, service' },
    { n: 7, label: 'Partnerships', desc: 'Marriage, the other' },
    { n: 8, label: 'Transformation', desc: 'Shared resources, taboo' },
    { n: 9, label: 'Meaning', desc: 'Philosophy, travel' },
    { n: 10, label: 'Career', desc: 'Reputation, legacy' },
    { n: 11, label: 'Community', desc: 'Friends, social causes' },
    { n: 12, label: 'Unconscious', desc: 'Solitude, hidden self' },
  ]

  const cx = 380, cy = 340, r = 220

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <h2>The Twelve Houses</h2>
      <h3>Opposite houses mirror each other — self vs. other, private vs. public</h3>

      <svg viewBox="0 0 760 680" style={{ width: '100%', maxWidth: 820, flex: 1 }}>
        {/* Background rings */}
        <circle cx={cx} cy={cy} r={r + 20} fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />

        {/* Opposing lines */}
        {[0, 1, 2, 3, 4, 5].map(i => {
          const a1 = (i / 12) * Math.PI * 2 - Math.PI / 2
          const a2 = ((i + 6) / 12) * Math.PI * 2 - Math.PI / 2
          const x1 = cx + r * 0.6 * Math.cos(a1)
          const y1 = cy + r * 0.6 * Math.sin(a1)
          const x2 = cx + r * 0.6 * Math.cos(a2)
          const y2 = cy + r * 0.6 * Math.sin(a2)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(201,168,76,0.12)" strokeWidth="1" strokeDasharray="5 4" />
        })}

        {/* Center */}
        <text x={cx} y={cy - 12} textAnchor="middle" fontSize="22" fill="var(--text-muted)">Opposites</text>
        <text x={cx} y={cy + 16} textAnchor="middle" fontSize="20" fill="var(--text-muted)">mirror</text>

        {/* House nodes */}
        {houses.map((h, i) => {
          const angle = (i / 12) * Math.PI * 2 - Math.PI / 2
          const x = cx + r * Math.cos(angle)
          const y = cy + r * Math.sin(angle)
          const isFirst = i < 6
          const color = isFirst ? 'var(--accent)' : 'var(--accent2)'

          // Label position — outside the circle
          const labelR = r + 60
          const lx = cx + labelR * Math.cos(angle)
          const ly = cy + labelR * Math.sin(angle)

          return (
            <g key={i}>
              <circle cx={x} cy={y} r={30} fill="var(--bg-light)" stroke={color} strokeWidth="1.5" />
              <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="central" fontSize="26" fill={color} fontWeight="500">{h.n}</text>
              {/* Label + desc outside */}
              <text x={lx} y={ly - 8} textAnchor="middle" dominantBaseline="central" fontSize="15" fill="var(--text)" fontWeight="500">{h.label}</text>
              <text x={lx} y={ly + 10} textAnchor="middle" fontSize="12" fill="var(--text-muted)">{h.desc}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
