import { skillGroups } from '../../data/resume'
import { Marquee } from '../Marquee'

const words = skillGroups.flatMap((g) => g.skills)
const reversed = [...words].reverse()

export function Marquees() {
  return (
    <div className="marquees" aria-hidden="true">
      <Marquee words={words} direction={1} className="marquee-a" />
      <Marquee words={reversed} direction={-1} className="marquee-b" />
    </div>
  )
}
