import React from "react"
import { string, number, object } from "prop-types"

import Button from "../../Shared/Button"
import "./ProjectCard.scss"

const ProjectCard = ({
  id,
  title,
  subtitle,
  paragraph,
  buttonLabel,
  image,
}) => {
  const projectId = `project-${id}`
  const subtitleId = `subtitle-${id}`
  const buttonId = `btn-${id}`
  const buttonAriaLabelledBy = `${projectId} ${buttonId}`
  return (
    <section className="project__card" id={projectId} title={title}>
      <div role="img" className="project__img">
        {/* eslint-disable-next-line global-require,import/no-dynamic-require */}
        <img alt="project" src={image} />
      </div>
      <article className="project__article">
        <h3 className="project__title">{title}</h3>
        <h5 id={subtitleId}>{subtitle}</h5>
        <p>{paragraph}</p>
        <Button
          label={buttonLabel}
          variant="project"
          id={buttonId}
          ariaLabelledby={buttonAriaLabelledBy}
        />
      </article>
    </section>
  )
}

ProjectCard.displayName = "Project Card"
ProjectCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  subtitle: string,
  paragraph: string.isRequired,
  buttonLabel: string,
  image: object.isRequired,
}
ProjectCard.defaultProps = {
  subtitle: null,
  buttonLabel: null,
}

export default ProjectCard
