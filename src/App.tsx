import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { NavBar } from './containers/NavBar'
import { FunctionBar } from './containers/FunctionBar'
import { GameCard } from './containers/GameCard'
import { GameList } from './containers/GameList'
import { Game } from './types'
import './tailwind.output.css'

function App() {
  const [game, setGame] = useState<Game | undefined>()
  const [isGameListOpen, setGameListOpen] = useState(false)

  useEffect(() => {
    async function fetchGameList() {
      const res = await axios.get(
        'https://poker-board.herokuapp.com/api/v1/5f6675be94d05d0004a0830d'
      )
      setGame(res.data)
    }
    // fetchGameList()
  }, [])

  return (
    <>
      <NavBar />
      <GameList
        isListOpen={isGameListOpen}
        setListOpen={setGameListOpen}
        setGame={setGame}
      />
      {!isGameListOpen && game && (
        <>
          <GameCard game={game} />
          <FunctionBar game={game} setGame={setGame} />
        </>
      )}
    </>
  )
}

export default App
