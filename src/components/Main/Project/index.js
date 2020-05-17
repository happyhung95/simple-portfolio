import React from 'react';

import Heading from '../../Shared/Heading';
import ProjectCard from './ProjectCard';
import pokerBoardImg from '../../../assets/images/poker-board.png'
import bambooShopImg from '../../../assets/images/bamboo-shop.png';
import countryStoreImg from '../../../assets/images/country-store.png';
import './Project.scss';

const pokerBoard =
  "An API to record buy-ins, buy-outs, and loans for the poker nights with friends. This project was completed out of Hung's interest in poker and to sharpen the knowledge of relevant technologies, specifically real-time updates. The API is publicly available.";

const bambooShop =
  "An e-commerce API with authentication using JWT, and sign in with Google for users to place orders. This was Hung's personal project during training at Integrify, from which he masters my skills with Node.JS, Mongoose, authentication, and testing.";

const countryStore =
  'A front-end web application with e-commerce functionalities and that is connected to Rest- Countries API. This was a personal project during the training at Integrify with the purpose of mastering React.js, Redux, the middleware, and MaterialUI.';

const projects = [
  {
    id: 1,
    title: 'Poker Board API',
    subtitle:
      'Stacks: Jest, MongoDB, Mongoose, Node.js, Socket.io., TypeScript',
    paragraph: pokerBoard,
    buttonLabel: 'Read more',
    buttonHref: 'https://github.com/happyhung95/poker-board-api',
    image: pokerBoardImg,
  },
  {
    id: 2,
    title: 'Bamboo Shop',
    subtitle:
      'Stacks: Google OAuth, Jest, Material-UI, MongoDB, Mongoose, Next.js, Node.js, TailwindCSS',
    paragraph: bambooShop,
    buttonLabel: 'Read more',
    buttonHref: 'https://github.com/happyhung95/bamboo-shop-api',
    image: bambooShopImg,
  },
  {
    id: 3,
    title: 'Countries Store',
    subtitle: 'Stacks: Hooks, Material-UI, React.js, Redux, Router, Saga, TypeScript',
    paragraph: countryStore,
    buttonLabel: 'Read more',
    buttonHref: 'https://happyhung95.github.io/countries-store/',
    image: countryStoreImg,
  },
];

const Project = () => (
  <section title='projects' id='project'>
    <Heading title='Projects' />
    <section className='project'>
      {projects.map(
        ({ id, title, subtitle, paragraph, buttonLabel, buttonHref, image }) => (
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
        )
      )}
    </section>
  </section>
);

export default Project;
            