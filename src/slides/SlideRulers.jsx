export default function SlideRulers() {
  // Circle layout: vertical axis at top splits Cancer (left) and Leo (right).
  // Index 0 = Leo, just right of 12 o'clock. Going clockwise:
  // Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces, Aries, Taurus, Gemini, Cancer
  // Sun's side (right half): Leo(0), Virgo(1), Libra(2), Scorpio(3), Sagittarius(4), Capricorn(5)
  // Moon's side (left half): Aquarius(6→bottom), Pisces(7), Aries(8), Taurus(9), Gemini(10), Cancer(11)

  const signData = [
    { sym: '♌', name: 'Leo', ruler: '☉ Sun', rColor: '#EF9F27' },            // 0 - just right of top
    { sym: '♍', name: 'Virgo', ruler: '☿ Mercury', rColor: '#85B7EB' },       // 1
    { sym: '♎', name: 'Libra', ruler: '♀ Venus', rColor: '#ED93B1' },         // 2
    { sym: '♏', name: 'Scorpio', ruler: '♂ Mars', rColor: '#E24B4A' },        // 3
    { sym: '♐', name: 'Sagittarius', ruler: '♃ Jupiter', rColor: '#EF9F27' }, // 4
    { sym: '♑', name: 'Capricorn', ruler: '♄ Saturn', rColor: '#888780' },    // 5
    { sym: '♒', name: 'Aquarius', ruler: '♄ Saturn', rColor: '#888780' },     // 6 - bottom-left
    { sym: '♓', name: 'Pisces', ruler: '♃ Jupiter', rColor: '#EF9F27' },      // 7
    { sym: '♈', name: 'Aries', ruler: '♂ Mars', rColor: '#E24B4A' },          // 8
    { sym: '♉', name: 'Taurus', ruler: '♀ Venus', rColor: '#ED93B1' },        // 9
    { sym: '♊', name: 'Gemini', ruler: '☿ Mercury', rColor: '#85B7EB' },      // 10
    { sym: '♋', name: 'Cancer', ruler: '☽ Moon', rColor: '#B4B2A9' },         // 11 - just left of top
  ]

  // Ruler pairs: each connects a Sun-side sign to its Moon-side mirror
  const rulerPairs = [
    { a: 0, b: 11, ruler: '☉ Sun / ☽ Moon', color: '#EF9F27' },   // Leo - Cancer
    { a: 1, b: 10, ruler: '☿ Mercury', color: '#85B7EB' },          // Virgo - Gemini
    { a: 2, b: 9, ruler: '♀ Venus', color: '#ED93B1' },             // Libra - Taurus
    { a: 3, b: 8, ruler: '♂ Mars', color: '#E24B4A' },              // Scorpio - Aries
    { a: 4, b: 7, ruler: '♃ Jupiter', color: '#EF9F27' },           // Sagittarius - Pisces
    { a: 5, b: 6, ruler: '♄ Saturn', color: '#888780' },            // Capricorn - Aquarius
  ]

  const cx = 380, cy = 330, r = 240

  // Position each sign: offset by half a step so the vertical axis falls
  // between index 11 (Cancer) and index 0 (Leo)
  function pos(i) {
    // Each sign occupies 30°. Place index 0 (Leo) starting at -75° (i.e. 15° clockwise from top).
    // That way the gap between index 11 and index 0 straddles the top (−90°).
    const angleDeg = -90 + 15 + i * 30
    const angle = angleDeg * Math.PI / 180
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)]
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <h2>Planetary Rulers</h2>
      <h3>Symmetric around the Cancer–Leo axis — each planet rules one sign on each side</h3>

      <svg viewBox="0 0 760 680" style={{ width: '100%', maxWidth: 800, flex: 1 }}>
        {/* Vertical axis */}
        <line x1={cx} y1={cy - r - 35} x2={cx} y2={cy + r + 35}
          stroke="rgba(201,168,76,0.15)" strokeWidth="1" strokeDasharray="5 4" />

        {/* Side labels at top */}
        <text x={cx - 50} y={30} textAnchor="end" fontSize="14" fill="var(--text-muted)" fontStyle="italic">Moon's side</text>
        <text x={cx + 50} y={30} textAnchor="start" fontSize="14" fill="var(--text-muted)" fontStyle="italic">Sun's side</text>

        {/* Background circle */}
        <circle cx={cx} cy={cy} r={r + 15} fill="none" stroke="rgba(201,168,76,0.06)" strokeWidth="1" />

        {/* Ruler pair lines */}
        {rulerPairs.map((pair, i) => {
          const [x1, y1] = pos(pair.a)
          const [x2, y2] = pos(pair.b)
          const midX = (x1 + x2) / 2
          const midY = (y1 + y2) / 2
          return (
            <g key={`pair-${i}`}>
              <line x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={pair.color} strokeWidth="1" strokeDasharray="4 3" opacity="0.3" />
              <text x={midX} y={midY} textAnchor="middle" dominantBaseline="central"
                fontSize="11" fill={pair.color} fontWeight="500" opacity="0.7">
                {pair.ruler}
              </text>
            </g>
          )
        })}

        {/* Sign nodes */}
        {signData.map((s, i) => {
          const [x, y] = pos(i)
          const labelAngleDeg = -90 + 15 + i * 30
          const labelAngle = labelAngleDeg * Math.PI / 180
          const lx = cx + (r + 50) * Math.cos(labelAngle)
          const ly = cy + (r + 50) * Math.sin(labelAngle)

          return (
            <g key={i}>
              <circle cx={x} cy={y} r={30} fill="var(--bg-light)" stroke={s.rColor} strokeWidth="1.5" />
              <text x={x} y={y - 4} textAnchor="middle" dominantBaseline="central" fontSize="20" fill="var(--text)">{s.sym}</text>
              <text x={x} y={y + 13} textAnchor="middle" fontSize="8" fill="var(--text-muted)">{s.name}</text>
              {/* Ruler label outside */}
              <text x={lx} y={ly} textAnchor="middle" dominantBaseline="central" fontSize="11" fill={s.rColor}>{s.ruler}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
