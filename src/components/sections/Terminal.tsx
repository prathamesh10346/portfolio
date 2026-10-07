import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { certifications, education, experience, profile, projects, skillGroups } from '../../data/resume'
import { applyTheme, themes } from '../../lib/theme'
import { scrollToId } from '../../lib/lenisInstance'

interface Line {
  kind: 'in' | 'out'
  text: string
}

const HELP = [
  'help              list commands',
  'whoami            short intro',
  'skills            tech stack',
  'experience        where I have worked',
  'projects          things I have shipped',
  'education         degree & certs',
  'contact           how to reach me',
  `theme <name>      ${themes.map((t) => t.id).join(' | ')}`,
  'goto <section>    about | skills | experience | projects | freelance | contact',
  'clear             clear the screen',
]

function run(input: string): string[] | 'clear' {
  const [cmd, ...args] = input.trim().toLowerCase().split(/\s+/)
  switch (cmd) {
    case '':
      return []
    case 'help':
      return HELP
    case 'whoami':
      return [`${profile.name} — ${profile.role}`, profile.tagline, `📍 ${profile.location}`]
    case 'skills':
      return skillGroups.map((g) => `${g.title.padEnd(30)} ${g.skills.join(', ')}`)
    case 'experience':
      return experience.map((e) => `${e.period.padEnd(24)} ${e.company} — ${e.role}`)
    case 'projects':
      return projects.map((p) => `${p.name.padEnd(10)} ${p.tagline}  [${p.stack.join(', ')}]`)
    case 'education':
      return [`${education.degree} (${education.period})`, education.school, ...certifications.map((c) => `• ${c.title} — ${c.issuer}`)]
    case 'contact':
      return [`✉  ${profile.email}`, `☎  ${profile.phone}`, `GitHub: ${profile.socials.github}`]
    case 'theme': {
      const t = themes.find((x) => x.id === args[0])
      if (!t) return [`usage: theme <${themes.map((x) => x.id).join('|')}>`]
      applyTheme(t.id)
      return [`theme set to ${t.label}`]
    }
    case 'goto': {
      const ok = ['about', 'skills', 'experience', 'projects', 'freelance', 'contact'].includes(args[0])
      if (!ok) return ['usage: goto <about|skills|experience|projects|freelance|contact>']
      scrollToId(args[0])
      return [`scrolling to ${args[0]}…`]
    }
    case 'clear':
      return 'clear'
    case 'sudo':
      return ['nice try. permission denied (but I am open to hiring offers).']
    default:
      return [`command not found: ${cmd}. type "help"`]
  }
}

const INTRO: Line[] = [
  { kind: 'out', text: `Welcome. Type "help" to see what this terminal can do.` },
]

export function Terminal() {
  const [lines, setLines] = useState<Line[]>(INTRO)
  const [value, setValue] = useState('')
  const history = useRef<string[]>([])
  const cursor = useRef(-1)
  const bodyRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const body = bodyRef.current
    if (body) body.scrollTop = body.scrollHeight
  }, [lines])

  function submit(raw: string) {
    const result = run(raw)
    history.current.unshift(raw)
    cursor.current = -1
    if (result === 'clear') return setLines([])
    setLines((l) => [...l, { kind: 'in', text: raw }, ...result.map((text) => ({ kind: 'out' as const, text }))])
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      submit(value)
      setValue('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      cursor.current = Math.min(cursor.current + 1, history.current.length - 1)
      setValue(history.current[cursor.current] ?? '')
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      cursor.current = Math.max(cursor.current - 1, -1)
      setValue(history.current[cursor.current] ?? '')
    }
  }

  return (
    <section id="terminal" className="section terminal-section">
      <span className="section-label mono">(07) Interactive</span>
      <h2 className="section-title">Skip the scroll. Ask my terminal.</h2>
      <div>

        <div className="terminal reveal" onClick={() => inputRef.current?.focus()} data-cursor-hover>
          <div className="terminal-bar">
            <span className="terminal-dot" style={{ background: '#ff5f57' }} />
            <span className="terminal-dot" style={{ background: '#febc2e' }} />
            <span className="terminal-dot" style={{ background: '#28c840' }} />
            <span className="terminal-title">prathmesh@portfolio ~ </span>
          </div>
          <div className="terminal-body" ref={bodyRef}>
            {lines.map((l, i) => (
              <div key={i} className={l.kind === 'in' ? 'terminal-in' : 'terminal-out'}>
                {l.kind === 'in' && <span className="terminal-prompt">❯ </span>}
                {l.text}
              </div>
            ))}
            <label className="terminal-in terminal-line">
              <span className="terminal-prompt">❯ </span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKey}
                spellCheck={false}
                autoCapitalize="off"
                autoComplete="off"
                aria-label="Terminal command"
              />
            </label>
          </div>
          <div className="terminal-chips">
            {['whoami', 'skills', 'projects', 'theme blaze', 'contact'].map((c) => (
              <button key={c} type="button" className="terminal-chip" onClick={(e) => { e.stopPropagation(); submit(c) }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
