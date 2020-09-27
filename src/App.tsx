import React, { useState } from 'react'

import { NavBar } from './containers/NavBar'
import { BottomBar } from './containers/BottomBar'
import { GameCard } from './containers/GameCard'
import { GameList } from './containers/GameList'
import { Game } from './types'
import './tailwind.output.css'

function App() {
  const [game, setGame] = useState<Game | undefined>()
  const [isGameListOpen, setGameListOpen] = useState(false)

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
          <BottomBar game={game} />
        </>
      )}
    </>
  )
}

export default App
