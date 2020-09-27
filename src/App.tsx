import React, { useState } from 'react'
import { NavBar } from './components/NavBar'
import { GameCard } from './containers/GameCard'
import { GameList } from './containers/GameList/index'
import './tailwind.output.css'

function App() {
  const [game, setGame] = useState()

  return (
    <>
      <NavBar />
      <GameList setGame={setGame} />
      <GameCard game={game} />
    </>
  )
}

export default App
