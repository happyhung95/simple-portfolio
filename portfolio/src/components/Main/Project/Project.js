import React from 'react';

import Heading from '../../Shared/Heading/Heading';
import ProjectCard from './ProjectCard';
import './Project.scss';

const dummyParagraph =
  'The repeated flooding events are partially caused by an unusually high water table in this small area. The water table has hit the ground surface in some locations to produce artificial springs. When rain occurs there is little or no infiltration and virtually all of the water flows downhill on the surface as overland flow.';

const projects = [
  {
    id: 1,
    title: 'Project 1',
    subtitle: 'Coordinator: Hung',
    paragraph: dummyParagraph,
    buttonLabel: 'Read more',
    imageURL: '../../../assets/images/img-1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    subtitle: 'Coordinator: Hung',
    paragraph: dummyParagraph,
    buttonLabel: 'Read more',
    imageURL: '../../../assets/images/img-2.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    subtitle: 'Coordinator: Hung',
    paragraph: dummyParagraph,
    buttonLabel: 'Read more',
    imageURL: '../../../assets/images/img-3.jpg',
  },
];

const Project = () => (
  <section className="project-container" title="projects">
    <Heading>Projects</Heading>
    {projects.map(
      ({ id, title, subtitle, paragraph, buttonLabel, imageURL }) => (
        <ProjectCard
          id={id}
          title={title}
          subtitle={subtitle}
          paragraph={paragraph}
          buttonLabel={buttonLabel}
          imageURL={imageURL}
        />
      )
    )}
  </section>
);

export default Project;
