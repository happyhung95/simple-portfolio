import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Transition from '../../components/Transition'
import { AddPlayerForm } from '../../components/AddPlayerForm'
import { AddTransactionForm } from '../../components/AddTransactionForm'
import { CalculatorSVG } from '../../svgs/Calculator'
import { PeopleSVG } from '../../svgs/People'
import { TransactionSVG } from '../../svgs/Transaction'
import { AppState } from '../../types'


export const FunctionBar = () => {
  const game = useSelector((state: AppState) => state.pokerBoard.game)
  const [showPlayerForm, setShowPlayerForm] = useState(false)
  const [showTransactionForm, setShowTransactionForm] = useState(false)
  const [showGameBalance, setShowGameBalance] = useState(false)
  const [gameBalance, setGameBalance] = useState(0)

  const { players, gameClosed } = game!

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
      skipRender: gameClosed,
    },
    {
      svg: <TransactionSVG className={svgClassName} />,
      handleClick: () => setShowTransactionForm(!showTransactionForm),
      skipRender: gameClosed,
    },
    { svg: <CalculatorSVG className={svgClassName} />, handleClick: checkSum, skipRender: false },
  ]

  return (
    <>
      <div className="flex mt-6 px-10 justify-around">
        {functions.map(({ svg, handleClick, skipRender }, index) => (
          <>
            {!skipRender && (
              <div
                key={index}
                role="button"
                tabIndex={0}
                className="p-2 border-2 border-gray-700 rounded-lg shadow outline-none"
                onKeyPress={handleClick}
                onClick={handleClick}
              >
                {svg}
              </div>
            )}
          </>
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
      <Transition showCondition={showTransactionForm}>
        <AddTransactionForm />
      </Transition>
      <Transition showCondition={showPlayerForm}>
        <AddPlayerForm />
      </Transition>
    </>
  )
}
