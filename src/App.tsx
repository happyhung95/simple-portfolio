import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { NavBar } from './containers/NavBar'
import { FunctionBar } from './containers/FunctionBar'
import { GameCard } from './containers/GameCard'
import { GameSelect } from './containers/GameSelect'
import { Game } from './types'
import './tailwind.output.css'

function App() {
  const [game, setGame] = useState<Game | undefined>()
  const [isGameListOpen, setGameListOpen] = useState(false)
  //@ts-ignore
  useEffect(() => {
    // async function fetchGameList() {
    //   const res = await axios.get('https://poker-board.herokuapp.com/api/v1/5f71ef3ab04a03b2a3591e8d')
    //   setGame(res.data)
    // }
    // fetchGameList()
  }, [])

  return (
    <>
      <NavBar />
      <GameSelect isListOpen={isGameListOpen} setListOpen={setGameListOpen} setGame={setGame} />
      {!isGameListOpen && game && (
        <>
          <GameCard game={game} setGame={setGame} />
          <FunctionBar game={game} setGame={setGame} />
        </>
      )}
    </>
  )
}

export default App
