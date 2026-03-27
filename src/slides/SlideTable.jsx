export default function SlideTable() {
  const data = [
    { sign: 'Aries', sym: '♈', energy: 'Masculine', el: 'Fire', mod: 'Cardinal', season: 'Spring', pos: 'start' },
    { sign: 'Taurus', sym: '♉', energy: 'Feminine', el: 'Earth', mod: 'Fixed', season: 'Spring', pos: 'middle' },
    { sign: 'Gemini', sym: '♊', energy: 'Masculine', el: 'Air', mod: 'Mutable', season: 'Spring', pos: 'end' },
    { sign: 'Cancer', sym: '♋', energy: 'Feminine', el: 'Water', mod: 'Cardinal', season: 'Summer', pos: 'start' },
    { sign: 'Leo', sym: '♌', energy: 'Masculine', el: 'Fire', mod: 'Fixed', season: 'Summer', pos: 'middle' },
    { sign: 'Virgo', sym: '♍', energy: 'Feminine', el: 'Earth', mod: 'Mutable', season: 'Summer', pos: 'end' },
    { sign: 'Libra', sym: '♎', energy: 'Masculine', el: 'Air', mod: 'Cardinal', season: 'Autumn', pos: 'start' },
    { sign: 'Scorpio', sym: '♏', energy: 'Feminine', el: 'Water', mod: 'Fixed', season: 'Autumn', pos: 'middle' },
    { sign: 'Sagittarius', sym: '♐', energy: 'Masculine', el: 'Fire', mod: 'Mutable', season: 'Autumn', pos: 'end' },
    { sign: 'Capricorn', sym: '♑', energy: 'Feminine', el: 'Earth', mod: 'Cardinal', season: 'Winter', pos: 'start' },
    { sign: 'Aquarius', sym: '♒', energy: 'Masculine', el: 'Air', mod: 'Fixed', season: 'Winter', pos: 'middle' },
    { sign: 'Pisces', sym: '♓', energy: 'Feminine', el: 'Water', mod: 'Mutable', season: 'Winter', pos: 'end' },
  ]

  const energyColors = { Masculine: '#5a6a7a', Feminine: '#9a8aaa' }
  const elColors = { Fire: '#d4544a', Earth: '#d4a44e', Air: '#4a8ec4', Water: '#4abaa0' }
  const modColors = { Cardinal: '#c084c0', Fixed: '#9a7aaa', Mutable: '#7a6a90' }
  const seasonColors = { Spring: '#81B29A', Summer: '#EF9F27', Autumn: '#E07A5F', Winter: '#85B7EB' }
  const blockStyle = (color) => ({
    height: 26, borderRadius: 4, background: color, flex: 1,
  })

  const cols = '180px 100px 1fr 1fr 1fr'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
      <h2>Energy, Elements & Modalities</h2>
      <h3>Every sign has a unique combination — 4 elements × 3 modalities = 12</h3>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 36, marginBottom: 14, marginTop: 4, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 5, fontWeight: 500 }}>Energy</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {Object.entries(energyColors).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 18, height: 12, borderRadius: 3, background: v }} />
                <span style={{ fontSize: 13, color: 'var(--text)' }}>{k}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 5, fontWeight: 500 }}>Quality</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {Object.entries(modColors).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 18, height: 12, borderRadius: 3, background: v }} />
                <span style={{ fontSize: 13, color: 'var(--text)' }}>{k}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 5, fontWeight: 500 }}>Elements</div>
          <div style={{ display: 'flex', gap: 10 }}>
            {Object.entries(elColors).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 18, height: 12, borderRadius: 3, background: v }} />
                <span style={{ fontSize: 13, color: 'var(--text)' }}>{k}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 8, alignItems: 'center', marginBottom: 3 }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>Sign</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>Season</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>Energy</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>Quality</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: 0.5 }}>Element</div>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1, justifyContent: 'center' }}>
        {data.map((d, i) => {
          const isSeasonStart = d.pos === 'start'
          return (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: cols, gap: 8, alignItems: 'center',
              borderTop: isSeasonStart ? '1px solid rgba(255,255,255,0.08)' : 'none',
              paddingTop: isSeasonStart ? 4 : 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 20 }}>{d.sym}</span>
                <span style={{ fontSize: 15, color: 'var(--text)', fontWeight: 500 }}>{d.sign}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontSize: 13, color: seasonColors[d.season], fontWeight: 500 }}>{d.season}</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{d.pos}</span>
              </div>
              <div style={blockStyle(energyColors[d.energy])} />
              <div style={blockStyle(modColors[d.mod])} />
              <div style={blockStyle(elColors[d.el])} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
