import React from 'react'

import { ScrollDown } from '../../components'
import './Intro.scss'

export const Intro = () => (
  <section className="intro-container">
    <div className="intro" title="Introduction section">
      <article className="intro__article" aria-label="Introduction article">
        <h1 className="intro__title">He commits from anywhere</h1>
        <p className="intro__paragraph__bold">
          Looking for an
          <span>efficient</span>,<span>proactive</span>, and
          <span>reliable</span> Full Stack Developer? You found him!
        </p>
        <p className="intro__paragraph">
          Hung is a passionate learner who never stops developing himself. He is also an entrepreneur with a diverse
          background that includes engineering, teaching, and sales. All in all, Hung is a versatile professional who is
          eager to join an equally versatile team.
        </p>
      </article>
      <div className="intro__img" role="img" aria-label="A white table with laptop phone and plant" />
    </div>
    <ScrollDown />
  </section>
)
