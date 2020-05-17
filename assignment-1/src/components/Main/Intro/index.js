import React from "react"
import "./Intro.scss"

const Intro = () => (
  <section className="intro" title="Introduction section">
    <article className="intro__article" aria-label="Introduction article">
      <h1 className="intro__title">We commit from anywhere</h1>
      <p className="intro__paragraph">
        Behind sooner dining so window excuse he summer. Breakfast met certainty
        and fulfilled propriety led. Waited get either are wooded little her.
      </p>
    </article>
    <div
      className="intro__img"
      role="img"
      aria-label="A white table with laptop phone and plant"
    />
  </section>
)

export default Intro
