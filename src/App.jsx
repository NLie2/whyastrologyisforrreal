import { useState, useEffect, useCallback } from 'react'
import './App.css'
import SlideTitle from './slides/SlideTitle'
import SlideTimeline from './slides/SlideTimeline'
import SlideDays from './slides/SlideDays'
import SlidePlanets from './slides/SlidePlanets'
import SlideEcliptic from './slides/SlideEcliptic'
import SlideYourSign from './slides/SlideYourSign'
import SlideHouses from './slides/SlideHouses'
import SlideHouseMeanings from './slides/SlideHouseMeanings'
import SlideRulers from './slides/SlideRulers'
import SlideTable from './slides/SlideTable'
import SlideBirthChart from './slides/SlideBirthChart'
import SlideChainDetail from './slides/SlideChainDetail'
import SlideHoldOn from './slides/SlideHoldOn'
import SlideClosing from './slides/SlideClosing'

const slides = [
  SlideTitle,
  SlideTimeline,
  SlideDays,
  SlidePlanets,
  SlideEcliptic,
  SlideYourSign,
  SlideRulers,
  SlideTable,
  SlideHouses,
  SlideHouseMeanings,
  SlideBirthChart,
  SlideChainDetail,
  SlideHoldOn,
  SlideClosing,
]

function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = useCallback((idx) => {
    if (idx < 0 || idx >= slides.length) return
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  return (
    <div className="slideshow">
      <div className="progress-bar" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />

      {slides.map((SlideComponent, i) => {
        const isActive = i === current
        const isPast = i < current
        return (
          <div
            key={i}
            className={`slide ${isActive ? 'active' : ''} ${isPast ? 'exit-left' : ''}`}
          >
            <SlideComponent active={isActive} />
          </div>
        )
      })}

      <nav className="nav">
        <button onClick={prev} disabled={current === 0}>&#8249;</button>
        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <span className="slide-num">{current + 1}/{slides.length}</span>
        <button onClick={next} disabled={current === slides.length - 1}>&#8250;</button>
      </nav>
    </div>
  )
}

export default App
