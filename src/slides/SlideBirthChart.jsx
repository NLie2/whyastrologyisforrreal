import birthChart from '../assets/birth_chart.jpeg'

export default function SlideBirthChart() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
      <h2>Reading a Birth Chart</h2>
      <h3>Each planet's ruler points you to the next link in the chain</h3>

      <div className="two-col" style={{ alignItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: 'calc(100vh - 200px)', overflow: 'hidden' }}>
          <img
            src={birthChart}
            alt="Example birth chart"
            style={{
              width: '100%',
              maxHeight: 'calc(100vh - 220px)',
              objectFit: 'contain',
              borderRadius: 16,
              border: '1px solid rgba(201,168,76,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          />
        </div>
        <div>
          <p style={{ fontSize: '1.05em' }}>Pick a house. Look at its sign. Find that sign's ruler. See where <em>that</em> planet landed. Repeat until the chain loops.</p>

          {/* Chain as vertical steps — easier to follow */}
          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { step: '3rd house is ♋ Cancer', who: 'ruled by ☽ Moon', kw: 'communication · nurturing', color: '#AFA9EC' },
              { step: '☽ Moon is in ♐ Sag (7th)', who: 'ruled by ♃ Jupiter', kw: 'partnerships · adventure', color: '#B4B2A9' },
              { step: '♃ Jupiter is in ♈ Aries (11th)', who: 'ruled by ♂ Mars', kw: 'community · boldness', color: '#EF9F27' },
              { step: '♂ Mars is in ♎ Libra (5th)', who: 'ruled by ♀ Venus', kw: 'creativity · harmony', color: '#E24B4A' },
              { step: '♀ Venus is in ♋ Cancer', who: null, kw: 'love · home', color: '#ED93B1', anchor: true },
            ].map((s, i) => (
              <div key={i}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '8px 14px',
                  borderRadius: 8,
                  background: s.anchor ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.02)',
                  border: s.anchor ? '1px solid var(--accent)' : '1px solid transparent',
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 14, color: 'var(--text)', fontWeight: 500 }}>{s.step}</span>
                    {s.who && <span style={{ fontSize: 13, color: 'var(--text-muted)' }}> — {s.who}</span>}
                    {s.anchor && <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}> — anchor ✦</span>}
                  </div>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{s.kw}</span>
                </div>
                {i < 4 && (
                  <div style={{ marginLeft: 18, height: 14, borderLeft: '1.5px dashed rgba(201,168,76,0.25)' }} />
                )}
              </div>
            ))}
          </div>

          <p style={{ marginTop: 14, fontSize: '0.85em', color: 'var(--text-muted)' }}>
            Venus rules Cancer and is <em>in</em> Cancer — <span className="highlight">domicile</span>. The landlord is home. The chain ends here.
          </p>
        </div>
      </div>
    </div>
  )
}
