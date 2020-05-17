import React from "react"

import Header from "./components/Header"
import Intro from "./components/Main/Intro"
import Blog from "./components/Main/Blog"
import TechStack from "./components/Main/Tech-Stack"
import Project from "./components/Main/Project"
import Contact from "./components/Main/Contact"
import Footer from "./components/Footer"
import "./assets/styles/_util.scss"

const App = () => (
  <section>
    <Header />
    <Intro />
    <Blog />
    <TechStack />
    <Project />
    <Contact />
    <Footer />
  </section>
)

export default App
