import React from 'react';

import Heading from '../../Shared/Heading';
import TechIcon from './TechIcon';
import TechWithoutIcon from './TechWithoutIcon';
import {
  NextJs,
  NodeJs,
  ReactIcon,
  JavaScript,
  TypeScript,
  Python,
  MongoDB,
  PostgreSQL,
} from '../../../assets/svg-icons/svg';
import './TechStack.scss';

const stacks = [
  {
    title: 'JavaScript',
    icon: <JavaScript />,
  },
  {
    title: 'MongoDb',
    icon: <MongoDB />,
  },
  {
    title: 'NextJs',
    icon: <NextJs />,
  },
  {
    title: 'NodeJs',
    icon: <NodeJs />,
  },
  {
    title: 'PostgreSQL',
    icon: <PostgreSQL />,
  },
  {
    title: 'Python',
    icon: <Python />,
  },
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'TypeScript',
    icon: <TypeScript />,
  },
];

const stacksNoIcon = [
  '#Socket.io',
  '#TailwindCSS',
  '#MaterialUI',
  '#Express.js',
  '#Mongoose',
  '#Jest',
  '#Pytest',
  '#RobotFramework',
];

const TechStack = () => (
  <section title='tech stacks' id='techStack'>
    <Heading title='Tech Stacks' />
    <section className='tech'>
      {stacks.map(({ title, icon }) => (
        <TechIcon key={`tech-${title}`} title={title} icon={icon} />
      ))}
    </section>
    <section className='tech__no-logo'>
      {stacksNoIcon.sort().map((title) => (
        <TechWithoutIcon title={title} />
      ))}
    </section>
  </section>
);

export default TechStack;
