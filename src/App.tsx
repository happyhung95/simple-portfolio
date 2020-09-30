import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Transition from './components'
import { CreateGame, FunctionBar, GameCard, GameSelect, NavBar} from './containers'
import { toggleGameSelect } from './redux/actions'
import { AppState } from './types'
import './tailwind.output.css'


function App() {
  const dispatch = useDispatch()
  
  const game = useSelector((state: AppState) => state.pokerBoard.game)
  const showGameList = useSelector((state: AppState) => state.pokerBoard.showGameList)
  const showCreateGame = useSelector((state: AppState) => state.pokerBoard.showCreateGame)
  const showGameSelect = useSelector((state: AppState) => state.pokerBoard.showGameSelect)

  useEffect(() => {
    dispatch(toggleGameSelect(true))
  }, [game])

  return (
    <>
      <NavBar />
      <Transition showCondition={showCreateGame}>
        <CreateGame />
      </Transition>
      <Transition showCondition={showGameSelect}>
        <GameSelect />
      </Transition>
      <Transition showCondition={!showGameList && !!game}>
        <GameCard />
        <FunctionBar />
      </Transition>
    </>
  )
}

export default App
