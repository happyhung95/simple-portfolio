import React from 'react';

import Header from './components/Header/Header';
import Intro from './components/Main/Intro/Intro';
import Blog from './components/Main/Blog/Blog';
import TechStack from './components/Main/Tech-Stack/TechStack';
import Project from './components/Main/Project/Project';
import Contact from './components/Main/Contact/Contact';
import Footer from './components/Footer/Footer';
import './assets/styles/_util.scss';

const App = () => (
  <div>
    <Header />
    <Intro />
    <Blog />
    <TechStack />
    <Project />
    <Contact />
    <Footer />
  </div>
);

export default App;
