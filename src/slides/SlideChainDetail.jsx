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

  const tagStyle = (color) => ({
    display: 'inline-block', fontSize: 12, padding: '2px 10px', borderRadius: 10,
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
    color: 'var(--text-muted)', marginTop: 2,
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <h2>Following the Chain</h2>
      <h3>Starting from the 3rd house (♋ Cancer, ruled by the Moon)...</h3>

      <div style={{ width: '100%', maxWidth: 820, marginTop: 20 }}>
        {steps.map((s, i) => (
          <div key={i}>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16,
              padding: '14px 20px', borderRadius: 10,
              background: s.anchor ? 'rgba(201,168,76,0.1)' : 'rgba(255,255,255,0.015)',
              border: s.anchor ? '1px solid var(--accent)' : '1px solid rgba(255,255,255,0.04)',
            }}>
              {/* Planet — what */}
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>Planet</div>
                <div style={{ fontSize: 16, color: s.planetColor, fontWeight: 600 }}>{s.planet}</div>
                <div style={tagStyle()}>{s.planetKw}</div>
              </div>

              {/* Sign — how */}
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>in sign</div>
                <div style={{ fontSize: 16, color: s.signColor, fontWeight: 600 }}>{s.sign}</div>
                <div style={tagStyle()}>{s.signKw}</div>
              </div>

              {/* House — where */}
              <div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>in house</div>
                <div style={{ fontSize: 16, color: 'var(--text)', fontWeight: 600 }}>{s.house} house</div>
                <div style={tagStyle()}>{s.houseKw}</div>
              </div>
            </div>

            {/* Connector */}
            {i < steps.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', marginLeft: 30, height: 20 }}>
                <div style={{ borderLeft: '1.5px dashed rgba(201,168,76,0.25)', height: '100%' }} />
                <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 10 }}>
                  {s.sign} is ruled by {steps[i + 1].planet}...
                </span>
              </div>
            )}
            {s.anchor && (
              <div style={{ textAlign: 'center', marginTop: 10, fontSize: 14, color: 'var(--accent)' }}>
                ✦ Venus rules Cancer and is <em>in</em> Cancer — domicile. The chain ends here.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
