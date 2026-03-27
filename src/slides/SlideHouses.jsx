import ZodiacChart from '../components/ZodiacChart'

export default function SlideHouses() {
  return (
    <>
      <h2>The Houses</h2>
      <h3>Twelve sections of the sky, fixed to your location on Earth</h3>

      <div className="two-col" style={{ flex: 1 }}>
        <div>
          <p>At any given moment, one point of the zodiac is rising on the eastern horizon. That's the <span className="highlight">Ascendant</span> — the starting point of the 1st house.</p>
          <p style={{ marginTop: 10 }}>The sky is divided into 12 sections fixed to the <em>observer</em>, not the stars:</p>
          <p style={{ marginTop: 8, fontSize: '0.85em' }}>
            <span className="highlight">1st house</span> — eastern horizon<br/>
            <span className="highlight">10th house</span> — top of sky (Midheaven)<br/>
            <span className="highlight">7th house</span> — western horizon<br/>
            <span className="highlight">4th house</span> — bottom of sky (IC)
          </p>
          <p style={{ marginTop: 10 }}>All 12 signs pass through all 12 houses every 24 hours. This is why astrologers need your <strong style={{ color: 'var(--accent)' }}>exact birth time and location</strong>.</p>
        </div>
        <ZodiacChart showControls={true} />
      </div>
    </>
  )
}
