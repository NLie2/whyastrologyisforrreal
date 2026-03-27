export default function SlideClosing() {
  return (
    <div className="center-slide" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 24 }}>
      <div style={{ fontSize: '3.5em', color: 'var(--accent)' }}>&#10022;</div>
      <h2 style={{ fontSize: '2.6em' }}>...and that's why astrology<br/>is for f*** real</h2>
      <p className="small" style={{ marginTop: 60, fontSize: '1em' }}>Made with curiosity</p>
    </div>
  )
}
