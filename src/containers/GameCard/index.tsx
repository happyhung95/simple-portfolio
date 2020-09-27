import React from 'react'

import { Game } from '../../types'
import { PlayerCard } from '../../components/PlayerCard'

type GameCardProps = {
  game: Game
}

export const GameCard = ({ game }: GameCardProps) => (
  <div className="mt-2 mx-4 border-2 rounded shadow-sm bg-gray-300 outline-none">
    {game.players.map((player) => (
      <PlayerCard player={player} players={game.players} />
    ))}
  </div>
)
