/* eslint-disable jsx-a11y/aria-activedescendant-has-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'

import Transition from '../../components/Transition'
import { DownArrowSVG } from '../../svgs/DownArrow'
import { Game } from '../../types'

type GameName = {
  _id: string
  name: string
}

type Props = {
  isListOpen: boolean
  setListOpen: (value: React.SetStateAction<boolean>) => void
  setGame: (value: React.SetStateAction<Game | undefined>) => void
}

export const GameList = ({ isListOpen, setListOpen, setGame }: Props) => {
  const [selected, setSelected] = useState<GameName>()
  const [gameList, loadGameList] = useState<GameName[]>([])

  const toggleDropdown = () => setListOpen(!isListOpen)

  const handleClick = async (game: GameName) => {
    const res = await axios.get(
      `https://poker-board.herokuapp.com/api/v1/${game._id}`
    )
    setGame(res.data)
    setSelected(game)
    toggleDropdown()
  }

  const node = useRef<HTMLDivElement>() // to detect outside click
  const outsideClickHandler = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    // @ts-ignore
    if (node && node?.current?.contains(event.target)) {
      // inside click
      return
    }
    // outside click
    setListOpen(false)
  }

  useEffect(() => {
    async function fetchGameList() {
      const res = await axios.get('https://poker-board.herokuapp.com/api/v1')
      loadGameList(res.data as GameName[])
    }
    fetchGameList()
    // add event when GameList is mounted
    // @ts-ignore
    document.addEventListener('click', outsideClickHandler)
    // return function to be called when unmounted
    return () => {
      // remove event listener after component unmount
      // @ts-ignore
      document.removeEventListener('click', outsideClickHandler)
    }
  }, [])

  return (
    <div className="mt-2 px-4 relative">
      {/* select game panel */}
      <div
        // @ts-ignore
        ref={node}
        tabIndex={0}
        className="px-4 py-2 flex items-center bg-gray-300 border-gray-400 rounded shadow outline-none"
        role="button"
        onKeyPress={toggleDropdown}
        onClick={toggleDropdown}
      >
        <DownArrowSVG
          className={`h-5 w-5 transform transition duration-100 ease-in-out ${
            !isListOpen && '-rotate-90'
          } `}
        />
        <p className="font-bold text-xl">{selected ? selected.name : 'Select game'}</p>
      </div>
      {/* Game panel */}
      <Transition showCondition={isListOpen}>
        <div className="flex-col absolute mt-2 px-4 w-11/12 bg-gray-300 rounded-lg shadow-lg transition ease-in-out duration-100">
          {gameList.map(({ _id, name }, index) => (
            <div
              key={_id}
              className={`my-1 px-1 py-1 ${
                index !== 0 && 'border-t border-opacity-25 border-gray-600'
              }`}
              onClick={() => handleClick({ _id, name })}
            >
              <span
                className={
                  selected?._id === _id
                    ? 'font-bold text-xl'
                    : 'text-gray-600 text-xl'
                }
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  )
}
