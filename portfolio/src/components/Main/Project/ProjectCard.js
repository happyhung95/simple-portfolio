import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../Shared/Button/Button';
import './ProjectCard.scss';

const ProjectCard = ({
  id,
  title,
  subtitle,
  paragraph,
  buttonLabel,
  imageURL,
}) => {
  const projectId = `project-${id}`;
  const subtitleId = `subtitle-${id}`;
  const buttonId = `btn-${id}`;
  const buttonAriaLabelledBy = `${projectId} ${buttonId}`;

  return (
    <section className="project__card" id={projectId} title={title}>
      <div role="img" className="project__img">
        <img alt="project" src={imageURL} />
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
  );
};

ProjectCard.displayName = 'Project Card';
ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  paragraph: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  imageURL: PropTypes.string,
};

export default ProjectCard;
