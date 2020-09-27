/* eslint-disable jsx-a11y/aria-activedescendant-has-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useRef } from 'react'
import { Transition } from '@tailwindui/react'
import axios from 'axios'

import { GameName, GameObject } from '../../types'

type GameListProps = {
  setGame: (value: React.SetStateAction<GameObject|undefined>) => void
}

export const GameList = ({ setGame }: GameListProps) => {
  const node = useRef<HTMLDivElement>() // to detect outside click
  const [isListOpen, setListOpen] = useState(false)
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
    // add event when Menu dropdown is mounted
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
      <div
        // @ts-ignore
        ref={node}
        tabIndex={0}
        className="px-4 py-2 flex items-center justify-between bg-gray-300 border-gray-400 rounded-lg shadow outline-none"
        role="button"
        onKeyPress={toggleDropdown}
        onClick={toggleDropdown}
      >
        <p className="font-bold">{selected ? selected.name : 'Select game'}</p>
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transform ${
            !isListOpen && '-rotate-90'
          } transition duration-100 ease-in-out`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <Transition
        show={isListOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <ul className="absolute w-11/12 mt-2 px-4 bg-gray-300 rounded-lg shadow-lg transition ease-in-out duration-100">
          {gameList.map(({ _id, name }, index) => (
            <li className="my-1" key={_id}>
              <button type="button" onClick={() => handleClick({ _id, name })}>
                <span
                  className={
                    selected?._id === _id ? 'font-bold text-xl' : 'text-gray-600 text-xl'
                  }
                >
                  {name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  )
}
