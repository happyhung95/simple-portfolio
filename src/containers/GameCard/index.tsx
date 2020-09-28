import React from 'react'
import axios from 'axios'

import { Game } from '../../types'
import { PlayerCard } from '../../components/PlayerCard'

type Props = {
  game: Game
  setGame: (value: React.SetStateAction<Game | undefined>) => void
}

export const GameCard = ({ game, setGame }: Props) => {
  const changeStatus = async (isClosed: boolean) => {
    const updateGame = await axios.put(`https://poker-board.herokuapp.com/api/v1/game/${game._id}`, {
      gameClosed: isClosed,
    })
    setGame(updateGame.data as Game)
  }

  return (
    <div className="mt-2 mx-4 border-2 rounded shadow-sm bg-gray-300 outline-none">
      {game.gameClosed ? (
        <div className="pl-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="px-2 ml-3 mr-2 text-white bg-red-500 rounded-full text-sm font-semibold">Finished</div>
            <button
              onClick={() => changeStatus(false)}
              className=" px-1 border-2 border-teal-600 rounded bg-gray-100 text-sm text-teal-600 font-bold outline-none"
            >
              Reactivate?
            </button>
          </div>
          <div className="text-right pt-2 pb-1 pr-6 font-semibold text-gray-600">Buy-in: {game.buyIn}</div>
        </div>
      ) : (
        <div className="pl-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="px-2 ml-3 mr-2 text-white bg-teal-500 rounded-full text-sm font-semibold">Ongoing</div>
            <button
              onClick={() => changeStatus(true)}
              className=" px-1 border-2 border-red-500 rounded bg-gray-100 text-sm text-red-500 font-bold outline-none"
            >
              Finish?
            </button>
          </div>
          <div className="text-right pt-2 pb-1 pr-6 font-semibold text-gray-600">Buy-in: {game.buyIn}</div>
        </div>
      )}
      {game.players.map((player, index) => (
        <PlayerCard key={index} player={player} players={game.players} />
      ))}
    </div>
  )
}
