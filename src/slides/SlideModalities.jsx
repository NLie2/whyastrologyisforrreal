export default function SlideModalities() {
  const modalities = [
    {
      name: 'Cardinal',
      color: 'var(--fire)',
      season: 'Beginning of each season',
      signs: '♈ Aries · ♋ Cancer · ♎ Libra · ♑ Capricorn',
      desc: 'Initiating, starting, launching. Walks into a room and says "here\'s what we\'re doing." Leadership, forward motion — but sometimes starts things they don\'t finish.',
      timing: 'Spring equinox · Summer solstice · Autumn equinox · Winter solstice',
    },
    {
      name: 'Fixed',
      color: 'var(--earth)',
      season: 'Middle of each season',
      signs: '♉ Taurus · ♌ Leo · ♏ Scorpio · ♒ Aquarius',
      desc: 'Sustaining, deepening, holding steady. Takes what cardinal started and builds it into something lasting. Determination and persistence — but also stubbornness.',
      timing: 'Season at full strength, weather settled in.',
    },
    {
      name: 'Mutable',
      color: 'var(--air)',
      season: 'End of each season',
      signs: '♊ Gemini · ♍ Virgo · ♐ Sagittarius · ♓ Pisces',
      desc: 'Adapting, transitioning, wrapping up. Reads the room and adjusts. Flexible and versatile — but also restless and indecisive.',
      timing: 'Things shifting, next season approaching.',
    },
  ]

  return (
    <>
      <h2>Cardinal · Fixed · Mutable</h2>
      <h3>Every season follows the same arc: initiate → sustain → adapt</h3>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginTop: 16, flex: 1 }}>
        {modalities.map((m, i) => (
          <div key={i} className="card" style={{ borderLeft: `3px solid ${m.color}`, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h4 style={{ color: 'var(--accent)', fontSize: 16, fontWeight: 500, margin: 0 }}>{m.name}</h4>
            <div style={{ fontSize: 10, color: 'var(--text-muted)' }}>{m.season}</div>
            <div style={{ fontSize: 13, color: 'var(--text)' }}>{m.signs}</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.5 }}>{m.desc}</div>
            <div style={{ fontSize: 10, color: 'var(--accent)', marginTop: 'auto' }}>{m.timing}</div>
          </div>
        ))}
      </div>

      <p className="small" style={{ marginTop: 12 }}>
        Spring: Aries (cardinal fire — explosive growth) → Taurus (fixed earth — lush, settled) → Gemini (mutable air — restless as summer approaches). Then the cycle repeats.
      </p>
    </>
  )
}
