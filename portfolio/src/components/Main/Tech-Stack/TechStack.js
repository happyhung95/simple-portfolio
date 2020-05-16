import React from 'react';

import Heading from '../../Shared/Heading/Heading';
import TechIcon from './TechIcon';
import './TechStack.scss';

const stacks = [
  {
    id: 1,
    title: 'Javascript',
    className: 'fab fa-js',
  },
  {
    id: 2,
    title: 'HTML5',
    className: 'fab fa-html5',
  },
  {
    id: 3,
    title: 'React',
    className: 'fab fa-react',
  },
  {
    id: 4,
    title: 'SASS',
    className: 'fab fa-sass',
  },
  {
    id: 5,
    title: 'CSS3',
    className: 'fab fa-css3',
  },
];

const TechStack = () => (
  <section title="tech stacks">
    <Heading>Tech Stacks</Heading>
    {stacks.map(({ id, title, className }) => (
      <TechIcon id={id} title={title} className={className} />
    ))}
  </section>
);

export default TechStack;
