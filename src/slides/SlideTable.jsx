export default function SlideTable() {
  const data = [
    { sign: 'Aries', sym: '♈', energy: 'Masculine', el: 'Fire', mod: 'Cardinal', season: 'Spring start', ruler: '♂ Mars', sect: 'Diurnal' },
    { sign: 'Taurus', sym: '♉', energy: 'Feminine', el: 'Earth', mod: 'Fixed', season: 'Spring mid', ruler: '♀ Venus', sect: 'Nocturnal' },
    { sign: 'Gemini', sym: '♊', energy: 'Masculine', el: 'Air', mod: 'Mutable', season: 'Spring end', ruler: '☿ Mercury', sect: 'Diurnal' },
    { sign: 'Cancer', sym: '♋', energy: 'Feminine', el: 'Water', mod: 'Cardinal', season: 'Summer start', ruler: '☽ Moon', sect: 'Nocturnal' },
    { sign: 'Leo', sym: '♌', energy: 'Masculine', el: 'Fire', mod: 'Fixed', season: 'Summer mid', ruler: '☉ Sun', sect: 'Diurnal' },
    { sign: 'Virgo', sym: '♍', energy: 'Feminine', el: 'Earth', mod: 'Mutable', season: 'Summer end', ruler: '☿ Mercury', sect: 'Nocturnal' },
    { sign: 'Libra', sym: '♎', energy: 'Masculine', el: 'Air', mod: 'Cardinal', season: 'Autumn start', ruler: '♀ Venus', sect: 'Diurnal' },
    { sign: 'Scorpio', sym: '♏', energy: 'Feminine', el: 'Water', mod: 'Fixed', season: 'Autumn mid', ruler: '♂ Mars', sect: 'Nocturnal' },
    { sign: 'Sagittarius', sym: '♐', energy: 'Masculine', el: 'Fire', mod: 'Mutable', season: 'Autumn end', ruler: '♃ Jupiter', sect: 'Diurnal' },
    { sign: 'Capricorn', sym: '♑', energy: 'Feminine', el: 'Earth', mod: 'Cardinal', season: 'Winter start', ruler: '♄ Saturn', sect: 'Nocturnal' },
    { sign: 'Aquarius', sym: '♒', energy: 'Masculine', el: 'Air', mod: 'Fixed', season: 'Winter mid', ruler: '♄ Saturn', sect: 'Diurnal' },
    { sign: 'Pisces', sym: '♓', energy: 'Feminine', el: 'Water', mod: 'Mutable', season: 'Winter end', ruler: '♃ Jupiter', sect: 'Nocturnal' },
  ]

  // Row background colors based on element — distinct and visible
  const elRowBg = {
    Fire: 'rgba(224,122,95,0.18)',
    Earth: 'rgba(129,178,154,0.18)',
    Air: 'rgba(133,183,235,0.18)',
    Water: 'rgba(175,169,236,0.18)',
  }

  const thStyle = {
    color: 'var(--accent)', fontWeight: 600, padding: '10px 14px',
    borderBottom: '2px solid rgba(201,168,76,0.3)',
    textAlign: 'left', fontSize: 16, textTransform: 'uppercase', letterSpacing: 0.5
  }
  const tdStyle = {
    padding: '8px 14px', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 17
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
      <h2>Energy, Elements & Modalities</h2>
      <h3>Every sign has a unique combination — 4 elements × 3 modalities = 12</h3>

      <div style={{ overflowX: 'auto', flex: 1 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Sign', '', 'Energy', 'Element', 'Modality', 'Season', 'Ruler', 'Sect'].map((h, i) => (
                <th key={i} style={thStyle}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              const energyBg = d.energy === 'Masculine'
                ? 'rgba(133,183,235,0.18)' : 'rgba(175,169,236,0.18)'
              const elBg = {
                Fire: 'rgba(224,122,95,0.22)',
                Earth: 'rgba(129,178,154,0.22)',
                Air: 'rgba(133,183,235,0.22)',
                Water: 'rgba(175,169,236,0.22)',
              }[d.el]
              const modBg = {
                Cardinal: 'rgba(224,122,95,0.18)',
                Fixed: 'rgba(129,178,154,0.18)',
                Mutable: 'rgba(133,183,235,0.18)',
              }[d.mod]
              const sectBg = d.sect === 'Diurnal'
                ? 'rgba(239,199,100,0.18)' : 'rgba(80,80,120,0.25)'
              return (
                <tr key={i} style={{ background: elRowBg[d.el] }}>
                  <td style={{ ...tdStyle, fontWeight: 600, color: 'var(--text)', fontSize: 18 }}>{d.sign}</td>
                  <td style={{ ...tdStyle, fontSize: 26 }}>{d.sym}</td>
                  <td style={{ ...tdStyle, background: energyBg }}>
                    <span className={`badge badge-${d.energy === 'Masculine' ? 'masc' : 'fem'}`}>{d.energy}</span>
                  </td>
                  <td style={{ ...tdStyle, background: elBg }}>
                    <span className={`badge badge-${d.el.toLowerCase()}`}>{d.el}</span>
                  </td>
                  <td style={{ ...tdStyle, background: modBg }}>
                    <span className={`badge badge-${d.mod.toLowerCase()}`}>{d.mod}</span>
                  </td>
                  <td style={{ ...tdStyle, color: 'var(--text-muted)' }}>{d.season}</td>
                  <td style={{ ...tdStyle, color: 'var(--accent)', fontWeight: 500 }}>{d.ruler}</td>
                  <td style={{ ...tdStyle, background: sectBg, color: 'var(--text-muted)' }}>{d.sect}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p className="small" style={{ marginTop: 10 }}>
        <span className="highlight">Masculine/Diurnal</span> = fire & air = active, outward ·{' '}
        <span className="highlight2">Feminine/Nocturnal</span> = earth & water = receptive, inward.
        Cardinal = initiates · Fixed = sustains · Mutable = adapts. Every slot filled exactly once.
      </p>
    </div>
  )
}
