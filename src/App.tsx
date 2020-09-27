import React, { useState } from 'react'

import { NavBar } from './containers/NavBar'
import { GameCard } from './containers/GameCard'
import { GameList } from './containers/GameList'
import { GameObject } from './types'
import './tailwind.output.css'

function App() {
  const [game, setGame] = useState<GameObject | undefined>()

  return (
    <>
      <NavBar />
      <GameList setGame={setGame} />
      <GameCard game={game} />
    </>
  )
}

export default App
