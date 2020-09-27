/* eslint-disable jsx-a11y/aria-activedescendant-has-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { FC, useEffect, useState, Dispatch } from 'react'
import axios from 'axios'

type GameName = {
  _id: string
  name: string
}

type GameListProps = {
  setGame: Dispatch<React.SetStateAction<undefined>>
}

export const GameList: FC<GameListProps> = ({ setGame }) => {
  const [gameList, loadGameList] = useState<GameName[]>([])

  useEffect(() => {
    async function fetchGameList() {
      const res = await axios.get('https://poker-board.herokuapp.com/api/v1')
      loadGameList(res.data as GameName[])
    }
    fetchGameList()
  }, [])

  const fetchGame = async (id: string) => {
    const res = await axios.get(
      `https://poker-board.herokuapp.com/api/v1/${id}`
    )
    setGame(res.data)
  }

  return (
    <div className="mt-2">
      {gameList &&
        gameList.map(({ _id, name }: GameName) => (
          <div
            className="flex justify-center px-12 py-1"
            onClick={() => fetchGame(_id)}
          >
            <div className="flex-1 text-center text-gray-700 bg-gray-300 py-2 rounded-lg">
              {name}
            </div>
          </div>
        ))}
    </div>
  )
}
