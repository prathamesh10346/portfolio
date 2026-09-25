import { projects } from '../../data/resume'
import { ProjectCard } from '../ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <div className="section-head">
          <span className="eyebrow">Selected Work</span>
          <h2>Fintech and blockchain apps, shipped end to end.</h2>
        </div>

        <div className="project-list" data-reveal-group>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
