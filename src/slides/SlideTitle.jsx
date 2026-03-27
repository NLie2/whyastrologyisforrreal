export default function SlideTitle() {
  return (
    <div className="center-slide" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 20 }}>
      <div style={{ fontSize: '4em', marginBottom: 12 }}>&#10022;</div>
      <h1 style={{ fontSize: '3.8em', textAlign: 'center' }}>Why Astrology<br/>Is for F*** Real</h1>
      <p className="small" style={{ marginTop: 60, fontSize: '1em' }}>Use arrow keys or click to navigate</p>
    </div>
  )
}
