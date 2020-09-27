import React from 'react'
import { GameCardProps } from '../../types'

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <>
      {game && (
        <div>
          <div>{game._id}</div>
          <div>{game.name}</div>
        </div>
      )}
    </>
  )
}
