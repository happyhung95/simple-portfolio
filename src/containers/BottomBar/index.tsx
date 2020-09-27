import React from 'react'

import { Game } from '../../types'

type BottomBarProps = {
  game: Game
}

export const BottomBar = ({ game }: BottomBarProps) => {
  return (
    <div className="flex justify-around">
      <div className="text-white text-center text-2xl font-bold">
      </div>
    </div>
  )
}
