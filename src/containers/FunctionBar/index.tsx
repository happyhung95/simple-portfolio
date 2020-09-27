import React, { useState } from 'react'
import { AddPlayerForm } from '../../components/AddPlayerForm'

import Transition from '../../components/Transition'
import { CalculatorSVG } from '../../svgs/Calculator'
import { PeopleSVG } from '../../svgs/People'
import { TransactionSVG } from '../../svgs/Transaction'
import { Game } from '../../types'

type Props = {
  game: Game
  setGame: (value: React.SetStateAction<Game | undefined>) => void
}

export const FunctionBar = ({ game, setGame }: Props) => {
  const [showPlayerForm, setShowPlayerForm] = useState(false)
  const [showTransactionForm, setShowTransactionForm] = useState(false)
  const [showGameBalance, setShowGameBalance] = useState(false)
  const [gameBalance, setGameBalance] = useState(0)

  const { players } = game

  const checkSum = () => {
    let totalGameBalance = 0
    players.map((player) => (totalGameBalance += player.balance))
    setShowGameBalance(!showGameBalance)
    setGameBalance(totalGameBalance)
  }

  const svgClassName = 'h-10 w-10'
  const functions = [
    {
      svg: <PeopleSVG className={svgClassName} />,
      handleClick: () => setShowPlayerForm(!showPlayerForm),
    },
    {
      svg: <TransactionSVG className={svgClassName} />,
      handleClick: () => setShowTransactionForm(!showTransactionForm),
    },
    { svg: <CalculatorSVG className={svgClassName} />, handleClick: checkSum },
  ]

  return (
    <div>
      <div className="flex mt-6 px-10 justify-around">
        {functions.map(({ svg, handleClick }, index) => (
          <div
            key={index}
            role="button"
            tabIndex={0}
            className="p-2 border-2 border-gray-700 rounded-lg shadow outline-none shadow"
            onKeyPress={handleClick}
            onClick={handleClick}
          >
            {svg}
          </div>
        ))}
      </div>
      <Transition showCondition={showGameBalance}>
        {gameBalance === 0 ? (
          <div className="mt-4 mx-20 p-2 justify-self-center border-2 border-white bg-teal-200 rounded-lg text-teal-600 font-bold font-mono text-2xl text-center">
            Balance is 0
          </div>
        ) : (
          <div className="mt-4 mx-20 p-2 justify-self-center border-2 border-white bg-red-200 rounded-lg text-red-600 font-bold font-mono text-2xl text-center">
            Balance is {gameBalance}
          </div>
        )}
      </Transition>
      <Transition showCondition={showPlayerForm}>
        <AddPlayerForm game={game} setGame={setGame} />
      </Transition>
    </div>
  )
}
