import { useState } from 'react'
import { CanvasBackground } from './components/canvas/CanvasBackground'
import { Cursor } from './components/Cursor'
import { Loader } from './components/Loader'
import { Nav } from './components/Nav'
import { Hero } from './components/sections/Hero'
import { Marquees } from './components/sections/Marquees'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Terminal } from './components/sections/Terminal'
import { ThemeDock } from './components/ThemeDock'
import { useInteractions } from './hooks/useInteractions'
import { initTheme } from './lib/theme'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { useLenis } from './hooks/useLenis'
import { usePointerTracking } from './hooks/usePointerTracking'
import { useScrollReveal } from './hooks/useScrollReveal'

initTheme()

function App() {
  const [ready, setReady] = useState(false)

  useLenis()
  usePointerTracking()
  useScrollReveal([ready])
  useInteractions([ready])

  return (
    <>
      {!ready && <Loader onDone={() => setReady(true)} />}
      <Cursor />
      <CanvasBackground />
      <Nav />
      <ThemeDock />
      <main className={`page${ready ? ' page-ready' : ''}`}>
        <Hero />
        <Marquees />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Terminal />
        <Contact />
      </main>
    </>
  )
}

export default App
