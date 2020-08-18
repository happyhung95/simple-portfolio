import React from 'react'

import pokerBoardImg from '../assets/images/poker-board.png'
import bambooShopImg from '../assets/images/bamboo-shop.png'
import countryStoreImg from '../assets/images/country-store.png'
import { NextJs, NodeJs, ReactIcon, JavaScript, TypeScript, Python, MongoDB, PostgreSQL } from '../assets/svg-icons/svg'

export const scrollDownTo = 'techStack'

export const links = [
  {
    label: 'Skills',
    url: 'techStack',
  },
  {
    label: 'Projects',
    url: 'project',
  },
  {
    label: 'Contact',
    url: 'contact',
  },
]

export const hashLinks = [
  {
    label: 'Skills',
    url: '#techStack',
  },
  {
    label: 'Projects',
    url: '#project',
  },
  {
    label: 'Contact',
    url: '#contact',
  },
]

const pokerBoard =
  "An API to record buy-ins, buy-outs, and loans for the poker nights with friends. This project was completed out of Hung's interest in poker and to sharpen the knowledge of relevant technologies, specifically real-time updates. The API is publicly available."

const bambooShop =
  "An e-commerce API with authentication using JWT, and sign in with Google for users to place orders. This was Hung's personal project during training at Integrify, from which he masters his skills with Node.JS, Mongoose, authentication, and testing."

const countryStore =
  'A front-end web application with e-commerce functionalities and that is connected to Rest- Countries API. This was a personal project during the training at Integrify with the purpose of mastering React.js, Redux, the middleware, and MaterialUI.'

export const projects = [
  {
    id: 1,
    title: 'Poker Board API',
    subtitle: 'Stacks: Jest, MongoDB, Mongoose, Node.js, Socket.io., TypeScript',
    paragraph: pokerBoard,
    buttonLabel: 'Read more',
    buttonHref: 'https://github.com/happyhung95/poker-board-api',
    image: pokerBoardImg,
  },
  {
    id: 2,
    title: 'Bamboo Shop',
    subtitle: 'Stacks: Google OAuth, Jest, Material-UI, MongoDB, Mongoose, Next.js, Node.js, TailwindCSS',
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
]

export const stacks = [
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
]

export const stacksNoIcon = ['#Socket.io', '#TailwindCSS', '#MaterialUI', '#Express.js', '#Mongoose', '#Jest', '#Pytest', '#RobotFramework']
