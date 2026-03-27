import birthChart from '../assets/birth_chart.jpeg'

export default function SlideHoldOn() {
  const steps = [
    {
      planet: '⛢ Uranus',
      planetKw: 'change, disruption, unexpected turns',
      planetColor: '#7F77DD',
      sign: '♒ Aquarius',
      signKw: 'technology, society, unconventional paths',
      signColor: 'var(--air)',
      house: '10th',
      houseKw: 'career, public reputation, legacy',
      note: 'Uranus in Aquarius = domicile. Rules with full force.',
      anchor: true,
    },
    {
      planet: '♄ Saturn',
      planetKw: 'structure, discipline, long-term effort',
      planetColor: '#888780',
      sign: '♉ Taurus',
      signKw: 'security, values, stability, endurance',
      signColor: 'var(--earth)',
      house: '12th',
      houseKw: 'hidden things, isolation, what operates behind the scenes',
    },
  ]

  const aiKeywords = [
    { label: '10th house', color: 'var(--accent)', keywords: [
      'mission-driven vocation', 'visible accountability', 'shaping how the world encounters AI'
    ]},
    { label: '12th house', color: 'var(--accent2)', keywords: [
      'invisible risks', 'what operates beneath the surface', 'anticipating harms before they emerge', 'working on problems most people don\'t know exist yet'
    ]},
    { label: '⛢ Uranus', color: '#7F77DD', keywords: [
      'unpredictable systems', 'emergent behavior', 'paradigm-breaking technology', 'the thing no one saw coming'
    ]},
    { label: '♒ Aquarius', color: 'var(--air)', keywords: [
      'technology in service of humanity', 'systems thinking', 'collective wellbeing over individual gain', 'who benefits and who\'s harmed'
    ]},
    { label: '♄ Saturn', color: '#888780', keywords: [
      'guardrails', 'alignment', 'constraints as a form of care', 'responsible development', 'slowing down to get it right'
    ]},
    { label: '♉ Taurus', color: 'var(--earth)', keywords: [
      'grounding fast-moving tech in stable values', 'what do we actually want to protect', 'long-term safety over short-term speed', 'building something that endures'
    ]},
  ]

  const tagStyle = {
    display: 'inline-block', fontSize: 12, padding: '2px 10px', borderRadius: 10,
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
    color: 'var(--text-muted)', marginTop: 2,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
      <h2>Hold on a damn second...</h2>
      <h3 style={{ marginBottom: 12 }}>Let's look at another chain in this chart</h3>

      <div style={{ display: 'flex', gap: 28, alignItems: 'start', flex: 1 }}>
        {/* Birth chart */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, maxWidth: '35%' }}>
          <img
            src={birthChart}
            alt="Birth chart"
            style={{
              width: '100%',
              maxHeight: 'calc(100vh - 280px)',
              objectFit: 'contain',
              borderRadius: 16,
              border: '1px solid rgba(201,168,76,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          />
        </div>

        {/* Chain + keywords */}
        <div style={{ flex: 1 }}>
          {steps.map((s, i) => (
            <div key={i}>
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14,
                padding: '12px 16px', borderRadius: 10,
                background: s.anchor ? 'rgba(127,119,221,0.1)' : 'rgba(255,255,255,0.015)',
                border: s.anchor ? '1px solid var(--accent2)' : '1px solid rgba(255,255,255,0.04)',
              }}>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>Planet</div>
                  <div style={{ fontSize: 15, color: s.planetColor, fontWeight: 600 }}>{s.planet}</div>
                  <div style={tagStyle}>{s.planetKw}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>in sign</div>
                  <div style={{ fontSize: 15, color: s.signColor, fontWeight: 600 }}>{s.sign}</div>
                  <div style={tagStyle}>{s.signKw}</div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>in house</div>
                  <div style={{ fontSize: 15, color: 'var(--text)', fontWeight: 600 }}>{s.house} house</div>
                  <div style={tagStyle}>{s.houseKw}</div>
                </div>
              </div>

              {s.note && (
                <div style={{ marginLeft: 16, marginTop: 4, fontSize: 12, color: 'var(--accent2)', fontStyle: 'italic' }}>
                  ✦ {s.note}
                </div>
              )}

              {i < steps.length - 1 && (
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: 26, height: 18 }}>
                  <div style={{ borderLeft: '1.5px dashed rgba(127,119,221,0.3)', height: '100%' }} />
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', marginLeft: 10 }}>
                    Aquarius is ruled by ♄ Saturn...
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* AI Safety keywords */}
          <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {aiKeywords.map((item, i) => (
              <div key={i} style={{
                padding: '10px 12px', borderRadius: 8,
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}>
                <div style={{ fontSize: 13, color: item.color, fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {item.keywords.map((kw, j) => (
                    <span key={j}>
                      {kw}{j < item.keywords.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
