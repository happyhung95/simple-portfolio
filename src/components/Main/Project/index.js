import React from 'react';

import Heading from '../../Shared/Heading';
import ProjectCard from './ProjectCard';
import projectImg1 from '../../../assets/images/img-1.jpg';
import projectImg2 from '../../../assets/images/img-2.jpg';
import projectImg3 from '../../../assets/images/img-3.jpg';
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
    image: projectImg1,
  },
  {
    id: 2,
    title: 'Project 2',
    subtitle: 'Coordinator: Hung',
    paragraph: dummyParagraph,
    buttonLabel: 'Read more',
    image: projectImg2,
  },
  {
    id: 3,
    title: 'Project 3',
    subtitle: 'Coordinator: Hung',
    paragraph: dummyParagraph,
    buttonLabel: 'Read more',
    image: projectImg3,
  },
];

const Project = () => (
  <section title="projects" id="project">
    <Heading title="Projects" />
    <section className="project">
      {projects.map(
        ({ id, title, subtitle, paragraph, buttonLabel, image }) => (
          <ProjectCard
            key={`project-${id}`}
            id={id}
            title={title}
            subtitle={subtitle}
            paragraph={paragraph}
            buttonLabel={buttonLabel}
            image={image}
          />
        )
      )}
    </section>
  </section>
);

export default Project;
