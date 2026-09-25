import { useState } from 'react'
import { CanvasBackground } from './components/canvas/CanvasBackground'
import { Cursor } from './components/Cursor'
import { Loader } from './components/Loader'
import { Nav } from './components/Nav'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Skills } from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { useLenis } from './hooks/useLenis'
import { usePointerTracking } from './hooks/usePointerTracking'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  const [ready, setReady] = useState(false)

  useLenis()
  usePointerTracking()
  useScrollReveal([ready])

  return (
    <>
      {!ready && <Loader onDone={() => setReady(true)} />}
      <Cursor />
      <CanvasBackground />
      <Nav />
      <main className={`page${ready ? ' page-ready' : ''}`}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
