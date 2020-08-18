import React from 'react'

import {Button} from '../Button'
import './ProjectCard.scss'

export const ProjectCard = ({ id, title, subtitle, paragraph, buttonLabel, buttonHref, image }) => {
  const projectId = `project-${id}`
  const subtitleId = `subtitle-${id}`
  const buttonId = `btn-${id}`
  const buttonAriaLabelledBy = `${projectId} ${buttonId}`
  return (
    <section className="project__card" id={projectId} title={title}>
      <div role="img" className="project__img">
        <img alt="project" src={image} />
      </div>
      <article className="project__article">
        <h3 className="project__title">{title}</h3>
        <p className="project__sub" id={subtitleId}>
          {subtitle}
        </p>
        <p>{paragraph}</p>
        <Button
          label={buttonLabel}
          variant="project"
          id={buttonId}
          ariaLabelledby={buttonAriaLabelledBy}
          href={buttonHref}
        />
      </article>
    </section>
  )
}

ProjectCard.displayName = 'Project Card'
