import React from 'react';

import Intro from "./Intro";
import Blog from "./Blog";
import TechStack from "./Tech-Stack";
import Project from "./Project";
import Contact from "./Contact";

const Main = () => {
  return (
    <main>
      <Intro />
      {/* <Blog /> */}
      <TechStack />
      <Project />
      <Contact />
    </main>
  );
};

export default Main;