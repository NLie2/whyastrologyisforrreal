export default function SlideEcliptic() {
  const cx = 600, cy = 600, r = 220
  const signs = ['\u2648','\u2649','\u264A','\u264B','\u264C','\u264D','\u264E','\u264F','\u2650','\u2651','\u2652','\u2653']
  const names = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
  const kw1 = ['bold, competitive','stable, grounded','curious, quick-witted','nurturing, protective','confident, generous','analytical, precise','harmonizing, diplomatic','intense, secretive','adventurous, philosophical','disciplined, ambitious','innovative, independent','intuitive, dreamy']
  const kw2 = ['leadership, action','sensual, loyal','versatile, restless','emotional, home-oriented','dramatic, creative','detail-oriented, modest','relational, aesthetic','transformative, deep','truth-seeking, restless','structured, persistent','technology, social change','compassionate, escapist']
  const els = ['fire','earth','air','water','fire','earth','air','water','fire','earth','air','water']
  const elC = { fire: '#E07A5F', earth: '#81B29A', air: '#85B7EB', water: '#AFA9EC' }

  // Stagger: even indices closer, odd indices further out
  const nameR = (i) => r + (i % 2 === 0 ? 60 : 110)
  const kw1R = (i) => nameR(i) + 30
  const kw2R = (i) => nameR(i) + 55

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <h2>The Zodiac Belt</h2>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', gap: 20 }}>
        <div style={{ maxWidth: 230, flexShrink: 0 }}>
          <p>All zodiac constellations sit along the <span className="highlight">ecliptic</span> — the belt where the Sun, Moon, and planets travel.</p>
          <p style={{ marginTop: 14 }}>The constellations are <span className="highlight">stars</span> — fixed points forming a <span className="highlight2">reference grid</span>.</p>
        </div>

        <svg viewBox="0 0 1200 1200" style={{ flex: 1, maxHeight: '80vh' }}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(201,168,76,0.25)" strokeWidth="45" opacity="0.25" />

          {Array.from({ length: 12 }).map((_, i) => {
            const a1 = (i * 30 - 90) * Math.PI / 180
            const amid = ((i * 30 + 15) - 90) * Math.PI / 180
            const x = cx + r * Math.cos(amid)
            const y = cy + r * Math.sin(amid)
            const lx1 = cx + (r - 22) * Math.cos(a1)
            const ly1 = cy + (r - 22) * Math.sin(a1)
            const lx2 = cx + (r + 22) * Math.cos(a1)
            const ly2 = cy + (r + 22) * Math.sin(a1)
            const nr = nameR(i)
            const nx = cx + nr * Math.cos(amid)
            const ny = cy + nr * Math.sin(amid)
            const q1r = kw1R(i)
            const q1x = cx + q1r * Math.cos(amid)
            const q1y = cy + q1r * Math.sin(amid)
            const q2r = kw2R(i)
            const q2x = cx + q2r * Math.cos(amid)
            const q2y = cy + q2r * Math.sin(amid)
            const color = elC[els[i]]
            // Thin connector line from circle to name
            const connX = cx + (r + 24) * Math.cos(amid)
            const connY = cy + (r + 24) * Math.sin(amid)
            return (
              <g key={i}>
                <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke={color} strokeWidth="0.8" opacity="0.3" />
                <line x1={connX} y1={connY} x2={nx} y2={ny} stroke={color} strokeWidth="0.5" opacity="0.2" />
                <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize="36" fill={color}>{signs[i]}</text>
                <text x={nx} y={ny} textAnchor="middle" dominantBaseline="central" fontSize="22" fill="var(--text)" fontWeight="600">{names[i]}</text>
                <text x={q1x} y={q1y} textAnchor="middle" dominantBaseline="central" fontSize="17" fill="var(--text-muted)">{kw1[i]}</text>
                <text x={q2x} y={q2y} textAnchor="middle" dominantBaseline="central" fontSize="17" fill="var(--text-muted)">{kw2[i]}</text>
              </g>
            )
          })}

          <circle cx={cx} cy={cy} r={r - 45} fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="5 5" opacity="0.2" />
          <text x={cx} y={cy - 12} textAnchor="middle" fontSize="26" fill="var(--text-muted)">Planets travel</text>
          <text x={cx} y={cy + 20} textAnchor="middle" fontSize="26" fill="var(--text-muted)">through this belt</text>
        </svg>
      </div>
    </div>
  )
}
