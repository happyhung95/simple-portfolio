import React, { useState } from 'react'
import { Transition } from '@tailwindui/react'

import { capitalizeString } from '../../helpers'
import { Player } from '../../types'

type PlayerCardProps = {
  player: Player
  players: Player[]
}

export const PlayerCard = ({ player, players }: PlayerCardProps) => {
  const { name, balance, transactions } = player
  const [showTransactions, toggleShowTransactions] = useState(false)

  const toggleDropdown = () => toggleShowTransactions(!showTransactions)

  return (
    <div
      className={`my-2 mx-2 border-2 border-gray-300 rounded-md transition
       ease-in-out duration-100 ${showTransactions && 'border-gray-600 '} `}
    >
      {/* Player menu */}
      <div
        tabIndex={0}
        className="pl-1 pr-4 mt-2 flex justify-between items-center outline-none"
        role="button"
        onKeyPress={toggleDropdown}
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <svg
            className={`h-5 w-5 transform transition duration-100 ease-in-out ${
              !showTransactions && '-rotate-90'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
          <div
            className={`text-lg font-semibold transform ${
              showTransactions && 'translate-x-2'
            }`}
          >
            {capitalizeString(name)}
          </div>
        </div>
        <div
          className={`text-lg font-semibold transform ${
            showTransactions && '-translate-x-2'
          }`}
        >
          {balance}
        </div>
      </div>
      {/* Transactions */}
      <Transition
        show={showTransactions}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="py-2">
          {transactions.map(({ description, amount }) => (
            <div className="flex justify-between px-6">
              <div className="text-gray-600 text-sm"> - {description}</div>
              <div className="text-gray-600 text-sm">{amount}</div>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  )
}
