import React from 'react'

import { Heading, ProjectCard } from '../../components'
import { projects } from '../../data'
import './Project.scss'

export const Project = () => (
  <section title="projects" id="project">
    <Heading id="projects" title="Projects" />
    <section className="project">
      {projects.map(({ id, title, subtitle, paragraph, buttonLabel, buttonHref, image }) => (
        <ProjectCard
          key={`project-${id}`}
          id={id}
          title={title}
          subtitle={subtitle}
          paragraph={paragraph}
          buttonLabel={buttonLabel}
          buttonHref={buttonHref}
          image={image}
        />
      ))}
    </section>
  </section>
)
