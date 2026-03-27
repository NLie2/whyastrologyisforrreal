import { useState } from 'react'

const CX = 280, CY = 280
const R_OUTER = 240, R_MID = 200, R_INNER = 160, R_PLANET = 132

const signs = [
  { name: 'Aries', sym: '\u2648', el: 'fire' },
  { name: 'Taurus', sym: '\u2649', el: 'earth' },
  { name: 'Gemini', sym: '\u264A', el: 'air' },
  { name: 'Cancer', sym: '\u264B', el: 'water' },
  { name: 'Leo', sym: '\u264C', el: 'fire' },
  { name: 'Virgo', sym: '\u264D', el: 'earth' },
  { name: 'Libra', sym: '\u264E', el: 'air' },
  { name: 'Scorpio', sym: '\u264F', el: 'water' },
  { name: 'Sagittarius', sym: '\u2650', el: 'fire' },
  { name: 'Capricorn', sym: '\u2651', el: 'earth' },
  { name: 'Aquarius', sym: '\u2652', el: 'air' },
  { name: 'Pisces', sym: '\u2653', el: 'water' },
]

const elColors = {
  fire: { light: 'rgba(224,122,95,0.12)', text: '#E07A5F' },
  earth: { light: 'rgba(129,178,154,0.12)', text: '#81B29A' },
  air: { light: 'rgba(133,183,235,0.12)', text: '#85B7EB' },
  water: { light: 'rgba(175,169,236,0.12)', text: '#AFA9EC' },
}

const planets = [
  { name: 'Sun', sym: '\u2609', deg: 25, color: '#EF9F27', r: 10 },
  { name: 'Moon', sym: '\u263D', deg: 110, color: '#B4B2A9', r: 8 },
  { name: 'Mercury', sym: '\u263F', deg: 40, color: '#85B7EB', r: 6 },
  { name: 'Venus', sym: '\u2640', deg: 345, color: '#ED93B1', r: 7 },
  { name: 'Mars', sym: '\u2642', deg: 195, color: '#E24B4A', r: 7 },
  { name: 'Jupiter', sym: '\u2643', deg: 155, color: '#EF9F27', r: 8 },
  { name: 'Saturn', sym: '\u2644', deg: 260, color: '#888780', r: 7 },
]

const houseLabels = ['1st','2nd','3rd','4th','5th','6th','7th','8th','9th','10th','11th','12th']

function rad(d) { return (d - 90) * Math.PI / 180 }
function px(r, deg) { return [CX + r * Math.cos(rad(deg)), CY + r * Math.sin(rad(deg))] }

function sectorPath(rOut, rIn, startDeg, endDeg) {
  const [ox1, oy1] = px(rOut, startDeg)
  const [ox2, oy2] = px(rOut, endDeg)
  const [ix1, iy1] = px(rIn, startDeg)
  const [ix2, iy2] = px(rIn, endDeg)
  return `M${ox1},${oy1} A${rOut},${rOut} 0 0 1 ${ox2},${oy2} L${ix2},${iy2} A${rIn},${rIn} 0 0 0 ${ix1},${iy1} Z`
}

export default function ZodiacChart({ showControls = true, defaultView = 'signs', style = {} }) {
  const [view, setView] = useState(defaultView)
  const [offset, setOffset] = useState(0)

  const hours = Math.floor((offset / 360) * 24)
  const mins = Math.floor(((offset / 360) * 24 - hours) * 60)
  const timeStr = `${String(hours % 12 || 12)}:${String(mins).padStart(2, '0')} ${hours < 12 ? 'AM' : 'PM'}`

  const chart = []

  for (let i = 0; i < 12; i++) {
    const startDeg = i * 30, endDeg = (i + 1) * 30, midDeg = startDeg + 15
    const ec = elColors[signs[i].el]
    const [sx, sy] = px((R_OUTER + R_MID) / 2 + 2, midDeg)
    const [nx, ny] = px(R_OUTER + 14, midDeg)
    chart.push(
      <g key={`sign-${i}`}>
        <path d={sectorPath(R_OUTER, R_MID, startDeg, endDeg)} fill={ec.light} stroke={ec.text} strokeWidth="0.5" opacity="0.85" />
        <text x={sx} y={sy} textAnchor="middle" dominantBaseline="central" fontSize="14" fill={ec.text}>{signs[i].sym}</text>
        <text x={nx} y={ny} textAnchor="middle" dominantBaseline="central" fontSize="7" fill="var(--text-muted)">{signs[i].name}</text>
      </g>
    )
  }

  chart.push(<circle key="mid" cx={CX} cy={CY} r={R_MID} fill="var(--bg)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />)
  chart.push(<circle key="earth" cx={CX} cy={CY} r={20} fill="rgba(133,183,235,0.15)" stroke="var(--air)" strokeWidth="0.8" />)
  // Earth label + crosshairs rotate with houses to show it's the fixed reference point
  const earthRotation = view === 'houses' ? offset : 0
  chart.push(
    <g key="earth-g" transform={`rotate(${earthRotation}, ${CX}, ${CY})`}>
      <line x1={CX - 14} y1={CY} x2={CX + 14} y2={CY} stroke="var(--air)" strokeWidth="0.5" opacity="0.4" />
      <line x1={CX} y1={CY - 14} x2={CX} y2={CY + 14} stroke="var(--air)" strokeWidth="0.5" opacity="0.4" />
      <text x={CX} y={CY + 1} textAnchor="middle" dominantBaseline="central" fontSize="7" fill="var(--text)" fontWeight="500">Earth</text>
    </g>
  )

  planets.forEach((p, i) => {
    const [plx, ply] = px(R_PLANET, p.deg)
    const [edx, edy] = px(R_MID + 2, p.deg)
    const [lx, ly] = px(R_PLANET - p.r - 11, p.deg)
    chart.push(
      <g key={`planet-${i}`}>
        <line x1={plx} y1={ply} x2={edx} y2={edy} stroke={p.color} strokeWidth="0.5" strokeDasharray="3 3" opacity="0.25" />
        <circle cx={plx} cy={ply} r={p.r} fill={p.color} opacity="0.85" />
        <text x={plx} y={ply + 1} textAnchor="middle" dominantBaseline="central" fontSize={p.r > 7 ? 9 : 7} fill="#fff" fontWeight="500">{p.sym}</text>
        <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="7" fill="var(--text-muted)">{p.name}</text>
      </g>
    )
  })

  if (view === 'houses') {
    for (let i = 0; i < 12; i++) {
      const startDeg = offset + i * 30, midDeg = startDeg + 15
      const [l1x, l1y] = px(22, startDeg)
      const [l2x, l2y] = px(R_MID - 2, startDeg)
      const [hx, hy] = px(R_INNER - 22, midDeg)
      chart.push(
        <g key={`house-${i}`}>
          <line x1={l1x} y1={l1y} x2={l2x} y2={l2y} stroke="var(--text-muted)" strokeWidth="0.5" strokeDasharray="4 3" opacity="0.4" />
          <text x={hx} y={hy} textAnchor="middle" dominantBaseline="central" fontSize="8" fill="var(--text-muted)">{houseLabels[i]}</text>
        </g>
      )
    }

    const axes = [
      { deg: offset, label: 'ASC', color: '#E24B4A' },
      { deg: offset + 180, label: 'DSC', color: '#E24B4A' },
      { deg: offset + 270, label: 'MC', color: 'var(--accent2)' },
      { deg: offset + 90, label: 'IC', color: 'var(--accent2)' },
    ]
    axes.forEach((a, i) => {
      const [x1, y1] = px(22, a.deg)
      const [x2, y2] = px(R_OUTER + 4, a.deg)
      const [lx, ly] = px(R_OUTER + 16, a.deg)
      chart.push(
        <g key={`axis-${i}`}>
          <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={a.color} strokeWidth="1.5" opacity="0.6" />
          <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="8" fill={a.color} fontWeight="500">{a.label}</text>
        </g>
      )
    })
  }

  return (
    <div style={style}>
      {showControls && (
        <div style={{ display: 'flex', gap: 4, marginBottom: 6, justifyContent: 'center' }}>
          <button onClick={() => setView('signs')} style={{
            fontSize: 11, padding: '4px 14px', borderRadius: 6, border: '1px solid',
            borderColor: view === 'signs' ? 'var(--accent)' : 'rgba(255,255,255,0.15)',
            background: view === 'signs' ? 'var(--accent)' : 'transparent',
            color: view === 'signs' ? 'var(--bg)' : 'var(--text-muted)', cursor: 'pointer'
          }}>Zodiac signs</button>
          <button onClick={() => setView('houses')} style={{
            fontSize: 11, padding: '4px 14px', borderRadius: 6, border: '1px solid',
            borderColor: view === 'houses' ? 'var(--accent)' : 'rgba(255,255,255,0.15)',
            background: view === 'houses' ? 'var(--accent)' : 'transparent',
            color: view === 'houses' ? 'var(--bg)' : 'var(--text-muted)', cursor: 'pointer'
          }}>Houses overlay</button>
        </div>
      )}
      <svg viewBox="0 0 560 560" style={{ width: '100%' }}>{chart}</svg>
      {showControls && view === 'houses' && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: 'var(--text-muted)', justifyContent: 'center', marginTop: 4 }}>
          <span>Birth time</span>
          <input type="range" min="0" max="360" value={offset} step="1"
            onChange={(e) => setOffset(parseInt(e.target.value))}
            style={{ flex: 1, maxWidth: 200, accentColor: 'var(--accent)' }} />
          <span style={{ minWidth: 55, textAlign: 'right' }}>{timeStr}</span>
        </div>
      )}
    </div>
  )
}
