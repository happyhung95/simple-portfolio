import React from 'react'

import { Contact, Footer, Intro, NavBar, Project, TechStack } from './containers'
import './assets/styles/_util.scss'

const App = () => (
  <section>
    <NavBar />
    <main>
      <Intro />
      <TechStack />
      <Project />
      <Contact />
    </main>
    <Footer />
  </section>
)

export default App
