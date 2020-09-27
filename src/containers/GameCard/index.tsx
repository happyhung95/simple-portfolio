import React from 'react'

import { Game } from '../../types'
import { PlayerCard } from '../../components/PlayerCard'

type Props = {
  game: Game
}

export const GameCard = ({ game }: Props) => (
  <div className="mt-2 mx-4 border-2 rounded shadow-sm bg-gray-300 outline-none">
    <div className="text-right pt-2 pb-1 pr-6 font-semibold text-gray-600">Buy-in: {game.buyIn}</div>
    {game.players.map((player, index) => (
      <PlayerCard key={index} player={player} players={game.players} />
    ))}
  </div>
)
