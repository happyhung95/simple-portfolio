import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleGameSelect, toggleCreateGame } from '../../redux/actions'
import { AppState } from '../../types'

export const NavBar = () => {
  const dispatch = useDispatch()
  const showGameSelect = useSelector((state: AppState) => state.pokerBoard.showGameSelect)
  const showCreateGame = useSelector((state: AppState) => state.pokerBoard.showCreateGame)

  const handleClick = () => {
    if (showGameSelect) {
      dispatch(toggleGameSelect(!showGameSelect))
      setTimeout(() => dispatch(toggleCreateGame(!showCreateGame)), 100)
    } else {
      dispatch(toggleCreateGame(!showCreateGame))
      setTimeout(() => dispatch(toggleGameSelect(!showGameSelect)), 100)
    }
  }

  return (
    <div className="flex bg-gray-600 px-4 py-3 items-center justify-between">
      <div className="text-white text-2xl font-extrabold font-mono">Poker Board</div>
      <div
        tabIndex={0}
        role="button"
        onKeyPress={handleClick}
        onClick={handleClick}
        className="px-2 py-1/2 rounded border-2 border-gray-500 bg-gray-500 text-gray-100 text-sm font-bold font-mono outline-none"
      >
        New game
      </div>
    </div>
  )
}
