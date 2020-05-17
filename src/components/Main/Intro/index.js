import React from 'react';
import './Intro.scss';

const Intro = () => (
  <section className="intro" title="Introduction section">
    <article className="intro__article" aria-label="Introduction article">
      <h1 className="intro__title">He commits from anywhere</h1>
      <p className="intro__paragraph__bold">
        Looking for an efficient, proactive, and reliable Full Stack Developer? You found him!
      </p>
      <p className="intro__paragraph">
      Hung is a passionate learner who never stops developing himself. 
      He is also an entrepreneur with a diverse background that includes engineering, teaching, and sales. All in all, Hung is a versatile professional who is eager to join an equally versatile team.
      </p>
    </article>
    <div
      className="intro__img"
      role="img"
      aria-label="A white table with laptop phone and plant"
    />
  </section>
);

export default Intro;
