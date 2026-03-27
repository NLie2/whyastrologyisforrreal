export default function SlideEcliptic() {
  const cx = 350, cy = 350, r = 260
  const signs = ['\u2648','\u2649','\u264A','\u264B','\u264C','\u264D','\u264E','\u264F','\u2650','\u2651','\u2652','\u2653']
  const names = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
  const els = ['fire','earth','air','water','fire','earth','air','water','fire','earth','air','water']
  const elC = { fire: '#E07A5F', earth: '#81B29A', air: '#85B7EB', water: '#AFA9EC' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <h2>The Zodiac Belt</h2>
      <h3>The ecliptic — the narrow belt where the Sun, Moon, and planets travel</h3>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', gap: 40 }}>
        {/* Text on left, smaller */}
        <div style={{ maxWidth: 300, flexShrink: 0 }}>
          <p>All zodiac constellations sit along the <span className="highlight">ecliptic</span> — that narrow belt where the Sun, Moon, and planets appear to travel.</p>
          <p style={{ marginTop: 14 }}>The constellations are defined by <span className="highlight">stars</span> — fixed points of light that made them useful as a <span className="highlight2">reference grid</span>.</p>
          <p style={{ marginTop: 14 }}>The planets, Sun, and Moon <em>move through</em> this grid. The zodiac is the stage; the celestial bodies are the actors.</p>
        </div>

        {/* Big central circle */}
        <svg viewBox="0 0 700 700" style={{ flex: 1, maxHeight: '70vh' }}>
          {/* Ecliptic belt */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="65" opacity="0.25" />

          {Array.from({ length: 12 }).map((_, i) => {
            const a1 = (i * 30 - 90) * Math.PI / 180
            const amid = ((i * 30 + 15) - 90) * Math.PI / 180
            const x = cx + r * Math.cos(amid)
            const y = cy + r * Math.sin(amid)
            const lx1 = cx + (r - 32) * Math.cos(a1)
            const ly1 = cy + (r - 32) * Math.sin(a1)
            const lx2 = cx + (r + 32) * Math.cos(a1)
            const ly2 = cy + (r + 32) * Math.sin(a1)
            const nx = cx + (r + 52) * Math.cos(amid)
            const ny = cy + (r + 52) * Math.sin(amid)
            const color = elC[els[i]]
            return (
              <g key={i}>
                <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke={color} strokeWidth="0.8" opacity="0.35" />
                <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize="36" fill={color}>{signs[i]}</text>
                <text x={nx} y={ny} textAnchor="middle" dominantBaseline="central" fontSize="17" fill="var(--text-muted)">{names[i]}</text>
              </g>
            )
          })}

          {/* Inner label */}
          <circle cx={cx} cy={cy} r={r - 65} fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
          <text x={cx} y={cy - 10} textAnchor="middle" fontSize="22" fill="var(--text-muted)">Planets travel</text>
          <text x={cx} y={cy + 18} textAnchor="middle" fontSize="22" fill="var(--text-muted)">through this belt</text>
        </svg>
      </div>
    </div>
  )
}
