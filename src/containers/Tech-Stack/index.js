import React from 'react'

import { Heading, TechIcon, TechWithoutIcon } from '../../components'
import { stacks, stacksNoIcon } from '../../data'
import './TechStack.scss'

export const TechStack = () => (
  <section title="tech stacks" id="techStack">
    <Heading id="tech-stacks" title="Tech Stacks" />
    <section className="tech">
      {stacks.map(({ title, icon }) => (
        <TechIcon key={`tech-${title}`} title={title} icon={icon} />
      ))}
    </section>
    <section className="tech__no-logo">
      {stacksNoIcon.sort().map((title) => (
        <TechWithoutIcon title={title} />
      ))}
    </section>
  </section>
)
