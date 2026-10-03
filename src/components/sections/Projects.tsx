import { projects } from '../../data/resume'
import { ProjectCard } from '../ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <span className="section-label mono">(05) Selected work</span>
      <h2 className="section-title">Fintech &amp; blockchain apps, shipped end to end.</h2>

      <div className="project-stack-wrap">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </section>
  )
}
