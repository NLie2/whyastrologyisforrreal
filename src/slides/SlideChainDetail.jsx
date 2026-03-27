export default function SlideChainDetail() {
  const steps = [
    {
      planet: '☽ Moon',
      planetKw: 'emotions, instincts, inner world',
      planetColor: '#B4B2A9',
      sign: '♐ Sagittarius',
      signKw: 'adventurous, philosophical, restless',
      signColor: 'var(--fire)',
      house: '7th',
      houseKw: 'partnerships, one-on-one relationships',
    },
    {
      planet: '♃ Jupiter',
      planetKw: 'expansion, meaning, abundance',
      planetColor: '#EF9F27',
      sign: '♈ Aries',
      signKw: 'bold, direct, initiating',
      signColor: 'var(--fire)',
      house: '11th',
      houseKw: 'friends, community, hopes',
    },
    {
      planet: '♂ Mars',
      planetKw: 'drive, action, conflict',
      planetColor: '#E24B4A',
      sign: '♎ Libra',
      signKw: 'harmonizing, diplomatic, relational',
      signColor: 'var(--air)',
      house: '5th',
      houseKw: 'creativity, romance, self-expression',
    },
    {
      planet: '♀ Venus',
      planetKw: 'love, beauty, values',
      planetColor: '#ED93B1',
      sign: '♋ Cancer',
      signKw: 'nurturing, protective, home-oriented',
      signColor: 'var(--water)',
      house: '3rd',
      houseKw: 'communication, learning, curiosity',
      anchor: true,
    },
  ]

  const tagStyle = {
    display: 'inline-block', fontSize: 15, padding: '3px 12px', borderRadius: 10,
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
    color: 'var(--text-muted)', marginTop: 4,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <h2>Following the Chain</h2>
      <h3>Starting from the 3rd house (♋ Cancer, ruled by the Moon)...</h3>

      <div style={{ width: '100%', maxWidth: 900, marginTop: 20 }}>
        {steps.map((s, i) => (
          <div key={i}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20,
              padding: '16px 24px', borderRadius: 10,
              background: s.anchor ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.015)',
              border: s.anchor ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.04)',
            }}>
              <div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>Planet</div>
                <div style={{ fontSize: 20, color: s.planetColor, fontWeight: 600 }}>{s.planet}</div>
                <div style={tagStyle}>{s.planetKw}</div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>in sign</div>
                <div style={{ fontSize: 20, color: s.signColor, fontWeight: 600 }}>{s.sign}</div>
                <div style={tagStyle}>{s.signKw}</div>
              </div>
              <div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>in house</div>
                <div style={{ fontSize: 20, color: 'var(--text)', fontWeight: 600 }}>{s.house} house</div>
                <div style={tagStyle}>{s.houseKw}</div>
              </div>
            </div>

            {i < steps.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: 34, height: 22 }}>
                <div style={{ borderLeft: '1.5px dashed rgba(201,168,76,0.25)', height: '100%' }} />
                <span style={{ fontSize: 14, color: 'var(--text-muted)', marginLeft: 12 }}>
                  {s.sign} is ruled by {steps[i + 1].planet}...
                </span>
              </div>
            )}
            {s.anchor && (
              <div style={{ textAlign: 'center', marginTop: 12, fontSize: 17, color: 'var(--accent)' }}>
                ✦ Venus rules Cancer and is <em>in</em> Cancer — domicile. The chain ends here.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
