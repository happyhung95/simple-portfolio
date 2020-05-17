import React from "react"

import Heading from "../../Shared/Heading"
import TechIcon from "./TechIcon"
import "./TechStack.scss"

const stacks = [
  {
    id: 1,
    title: "Javascript",
    icon: "fab fa-js-square",
  },
  {
    id: 2,
    title: "HTML5",
    icon: "fab fa-html5",
  },
  {
    id: 3,
    title: "React",
    icon: "fab fa-react",
  },
  {
    id: 4,
    title: "SASS",
    icon: "fab fa-sass",
  },
  {
    id: 5,
    title: "CSS3",
    icon: "fab fa-css3",
  },
]

const TechStack = () => (
  <section title="tech stacks" id="techStack">
    <Heading title="Tech Stacks" />
    <section className="tech">
      {stacks.map(({ id, title, icon }) => (
        <TechIcon key={`tech-${id}`} id={id} title={title} icon={icon} />
      ))}
    </section>
  </section>
)

export default TechStack
