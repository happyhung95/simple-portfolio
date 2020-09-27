import React, { FC, useEffect } from 'react'

type Transaction = {
  _id: string
  ownerId: string
  counterPartyId: string
  refId: string
  description: string
  createdAt: string
}

type Player = {
  balance: number
  transactions: Transaction[]
}

type GameObject = {
  _id: string
  name: string
  buyIn: number
  players: Player[]
  createdAt: string
  updatedAt: string
}

type GameCardProps = {
  game: GameObject
}

export const GameCard: FC<GameCardProps> = ({ game }) => {

  useEffect(() => {
    console.log('game', game)
  }, [game])

  return (
    <>
      {game && (
        <div>
          <div>{game.name}</div>
        </div>
      )}
    </>
  )
}
