import ZodiacChart from '../components/ZodiacChart'

export default function SlideYourSign() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
      <h2>What "Your Sign" Really Means</h2>
      <h3>You don't have one sign — you have twelve</h3>

      <div className="two-col" style={{ alignItems: 'center' }}>
        <div>
          <p>"I'm an Aries" means the Sun was in Aries when you were born. But you also have a Moon sign, a Mercury sign, a Venus sign — one for <em>each</em> celestial body. That full map is your <span className="highlight">birth chart</span>.</p>

          <p style={{ marginTop: 14, fontSize: '0.9em', color: 'var(--text-muted)' }}>
            ☉ Sun · ☽ Moon · ☿ Mercury · ♀ Venus · ♂ Mars · ♃ Jupiter · ♄ Saturn · ⛢ Uranus · ♆ Neptune · ♇ Pluto + Ascendant
          </p>

          <div className="card" style={{ marginTop: 18, borderColor: 'rgba(201,168,76,0.2)', padding: 18 }}>
            <p style={{ fontSize: '0.95em' }}><span className="highlight">Precession:</span> Earth's axis wobbles slowly, so the signs drifted from the constellations ~2,000 years ago. The zodiac is now an abstract framework. ~24,000 years until they realign.</p>
          </div>
        </div>
        <ZodiacChart showControls={true} defaultView="signs" />
      </div>
    </div>
  )
}
