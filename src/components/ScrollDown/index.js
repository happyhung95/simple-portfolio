import React from 'react'
import { Link as SmoothLink } from 'react-scroll'

import { DownArrow } from '../../assets/svg-icons/svg'
import { scrollDownTo } from '../../data'
import './ScrollDown.scss'

export const ScrollDown = () => {
  return (
    <div className="scroll-down-container">
      <div className="scroll-down">
        <SmoothLink to={scrollDownTo} spy smooth duration={500}>
          <DownArrow />
        </SmoothLink>
      </div>
    </div>
  )
}
