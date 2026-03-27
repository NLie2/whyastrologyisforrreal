export default function SlideTable() {
  const data = [
    { sign: 'Aries', sym: '♈', energy: 'Masculine', el: 'Fire', mod: 'Cardinal' },
    { sign: 'Taurus', sym: '♉', energy: 'Feminine', el: 'Earth', mod: 'Fixed' },
    { sign: 'Gemini', sym: '♊', energy: 'Masculine', el: 'Air', mod: 'Mutable' },
    { sign: 'Cancer', sym: '♋', energy: 'Feminine', el: 'Water', mod: 'Cardinal' },
    { sign: 'Leo', sym: '♌', energy: 'Masculine', el: 'Fire', mod: 'Fixed' },
    { sign: 'Virgo', sym: '♍', energy: 'Feminine', el: 'Earth', mod: 'Mutable' },
    { sign: 'Libra', sym: '♎', energy: 'Masculine', el: 'Air', mod: 'Cardinal' },
    { sign: 'Scorpio', sym: '♏', energy: 'Feminine', el: 'Water', mod: 'Fixed' },
    { sign: 'Sagittarius', sym: '♐', energy: 'Masculine', el: 'Fire', mod: 'Mutable' },
    { sign: 'Capricorn', sym: '♑', energy: 'Feminine', el: 'Earth', mod: 'Cardinal' },
    { sign: 'Aquarius', sym: '♒', energy: 'Masculine', el: 'Air', mod: 'Fixed' },
    { sign: 'Pisces', sym: '♓', energy: 'Feminine', el: 'Water', mod: 'Mutable' },
  ]

  const energyColors = { Masculine: '#5a6a7a', Feminine: '#9a8aaa' }
  const elColors = { Fire: '#d4544a', Earth: '#d4a44e', Air: '#4a8ec4', Water: '#4abaa0' }
  const modColors = { Cardinal: '#c084c0', Fixed: '#9a7aaa', Mutable: '#7a6a90' }

  const blockStyle = (color) => ({
    height: 28, borderRadius: 4, background: color, flex: 1,
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
      <h2>Energy, Elements & Modalities</h2>

      {/* Legend */}
      <div style={{ display: 'flex', gap: 40, marginBottom: 16, marginTop: 8, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Energy</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {Object.entries(energyColors).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 20, height: 14, borderRadius: 3, background: v }} />
                <span style={{ fontSize: 14, color: 'var(--text)' }}>{k}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Quality</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {Object.entries(modColors).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 20, height: 14, borderRadius: 3, background: v }} />
                <span style={{ fontSize: 14, color: 'var(--text)' }}>{k}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Elements</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {Object.entries(elColors).map(([k, v]) => (
              <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <div style={{ width: 20, height: 14, borderRadius: 3, background: v }} />
                <span style={{ fontSize: 14, color: 'var(--text)' }}>{k}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Column headers */}
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr', gap: 8, alignItems: 'center', marginBottom: 4 }}>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>Signs</div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>Energy</div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>Quality</div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>Elements</div>
      </div>

      {/* Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1, justifyContent: 'center' }}>
        {data.map((d, i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '180px 1fr 1fr 1fr', gap: 8, alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>{d.sym}</span>
              <span style={{ fontSize: 16, color: 'var(--text)', fontWeight: 500 }}>{d.sign}</span>
            </div>
            <div style={blockStyle(energyColors[d.energy])} />
            <div style={blockStyle(modColors[d.mod])} />
            <div style={blockStyle(elColors[d.el])} />
          </div>
        ))}
      </div>
    </div>
  )
}
