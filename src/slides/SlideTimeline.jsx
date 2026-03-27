export default function SlideTimeline() {
  // Tiers: 0 = far above, 1 = mid above, 2 = near above, 3 = near below, 4 = mid below, 5 = far below
  // Carefully assigned so horizontally close events never share a tier
  const events = [
    { year: -4000, label: 'Indo-European\nastrological roots', color: 'var(--accent)', tier: 0 },
    { year: -3000, label: 'Babylonian\nstar catalogues', color: 'var(--accent)', tier: 5 },
    { year: -1800, label: 'Babylonian\nomen texts', color: 'var(--accent)', tier: 0 },
    { year: -750, label: 'MUL.APIN\ncatalogue', color: 'var(--accent)', tier: 5 },
    { year: -500, label: 'Zodiac\nformalized', color: 'var(--accent)', tier: 1 },
    { year: -323, label: 'Hellenistic\nastrology', color: 'var(--accent)', tier: 4 },
    { year: -44, label: 'Roman Republic\nfalls', color: 'var(--accent2)', tier: 0 },
    { year: 476, label: 'Fall of\nRome', color: 'var(--accent2)', tier: 5 },
    { year: 1066, label: 'Norman\nConquest', color: 'var(--accent2)', tier: 0 },
    { year: 1492, label: 'Columbus', color: 'var(--accent2)', tier: 4 },
    { year: 1776, label: 'American\nRevolution', color: 'var(--accent2)', tier: 0 },
    { year: 1789, label: 'French\nRevolution', color: 'var(--accent2)', tier: 3 },
    { year: 1914, label: 'WWI', color: 'var(--accent2)', tier: 5 },
    { year: 1939, label: 'WWII', color: 'var(--accent2)', tier: 1 },
    { year: 1969, label: 'Internet', color: 'var(--accent2)', tier: 4 },
    { year: 2015, label: 'HPMOR', color: 'var(--accent2)', tier: 0 },
    { year: 2022, label: 'ChatGPT', color: 'var(--accent2)', tier: 5 },
  ]

  const minYear = -4500
  const maxYear = 2300
  const pct = (y) => ((y - minYear) / (maxYear - minYear)) * 100

  // 6 vertical tiers — spread further apart for bigger text
  const tierLabelTop = {
    0: 'calc(50% - 200px)',
    1: 'calc(50% - 130px)',
    2: 'calc(50% - 65px)',
    3: 'calc(50% + 35px)',
    4: 'calc(50% + 100px)',
    5: 'calc(50% + 165px)',
  }
  const tierTickTop = {
    0: 'calc(50% - 80px)',
    1: 'calc(50% - 50px)',
    2: 'calc(50% - 20px)',
    3: '50%',
    4: '50%',
    5: '50%',
  }
  const tierTickHeight = {
    0: 80,
    1: 50,
    2: 20,
    3: 20,
    4: 50,
    5: 80,
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
      <h2>Astrology Is <em>Ancient</em></h2>
      <h3>Older than almost everything you think of as "old"</h3>

      <div style={{ position: 'relative', width: '100%', height: 520, marginTop: 0 }}>
        {/* Main bar — centered */}
        <div style={{
          position: 'absolute', top: '50%', left: 0, right: 0, height: 5,
          background: 'linear-gradient(90deg, var(--accent), var(--accent2))', borderRadius: 2,
          transform: 'translateY(-50%)'
        }} />

        {/* Ancient highlight */}
        <div style={{
          position: 'absolute', top: 'calc(50% - 10px)', left: `${pct(-4000)}%`, width: `${pct(-323) - pct(-4000)}%`,
          height: 20, background: 'rgba(201,168,76,0.12)', borderRadius: 6
        }} />

        {/* Modern highlight */}
        <div style={{
          position: 'absolute', top: 'calc(50% - 10px)', left: `${pct(-44)}%`, width: `${pct(2025) - pct(-44)}%`,
          height: 20, background: 'rgba(127,119,221,0.08)', borderRadius: 6
        }} />

        {events.map((e, i) => {
          const left = pct(e.year)
          const yearStr = e.year < 0 ? `${Math.abs(e.year)} BCE` : `${e.year} CE`
          const isAbove = e.tier <= 2
          return (
            <div key={i}>
              {/* Tick line */}
              <div style={{
                position: 'absolute', left: `${left}%`,
                top: tierTickTop[e.tier],
                width: 2, height: tierTickHeight[e.tier],
                background: e.color, opacity: 0.35
              }} />
              {/* Label */}
              <div style={{
                position: 'absolute', left: `${left}%`,
                top: tierLabelTop[e.tier],
                transform: 'translateX(-50%)', textAlign: 'center',
                fontSize: 15, color: e.color, whiteSpace: 'pre-line', lineHeight: 1.35,
                fontWeight: 500,
              }}>
                {isAbove ? (
                  <>
                    {e.label}
                    <br />
                    <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 400 }}>{yearStr}</span>
                  </>
                ) : (
                  <>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 400 }}>{yearStr}</span>
                    <br />
                    {e.label}
                  </>
                )}
              </div>
            </div>
          )
        })}

        {/* Scale comparison */}
        <div style={{
          position: 'absolute', bottom: -15, left: 0, right: 0,
          textAlign: 'center', fontSize: 17, color: 'var(--text-muted)'
        }}>
          Astrology: <span style={{ color: 'var(--accent)', fontWeight: 600 }}>~6,000 years</span>
          &nbsp;&middot;&nbsp;
          Modern history: <span style={{ color: 'var(--accent2)', fontWeight: 600 }}>~500 years</span>
          &nbsp;&middot;&nbsp;
          Ratio: <span style={{ color: 'var(--text)', fontWeight: 600 }}>12 : 1</span>
        </div>
      </div>
    </div>
  )
}
