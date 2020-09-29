/* eslint-disable array-callback-return */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, FormikHelpers, FormikProps, Form, Field } from 'formik'
import axios from 'axios'

import { loadGame } from '../../redux/actions'
import { capitalizeString } from '../../helpers/index'
import { Game, AppState } from '../../types'

type FormValues = {
  from0: string
  to0: string
  amount0: number
  from1: string
  to1: string
  amount1: number
}

type AddTransactionRequest = {
  type: 'add' | 'remove'
  transactionId: string | null
  refId: string
  ownerId: string
  counterPartyId: string
  description: string
  amount: number
}

type Request = {
  gameId: string
  requests: AddTransactionRequest[]
}

export const AddTransactionForm = () => {
  const dispatch = useDispatch()
  const game = useSelector((state: AppState) => state.pokerBoard.game)

  const { players } = game!

  const handleSubmit = async (values: FormValues, { setSubmitting, resetForm }: FormikHelpers<FormValues>) => {
    setSubmitting(false)

    const req: Request = {
      gameId: game!._id,
      requests: [],
    }

    const { from0, to0, amount0, from1, to1, amount1 } = values

    const transactions = [
      { from: from0, to: to0, amount: amount0 },
      { from: from1, to: to1, amount: amount1 },
    ]

    transactions.map(({ from, to, amount }) => {
      if (!!from && !!to) {
        const loanerId = players.find((player) => player.name.toLowerCase() === from.toLowerCase())?._id
        const borrowerId = players.find((player) => player.name.toLowerCase() === to.toLowerCase())?._id
        const refId = `${from}-${to}-${Date.now()}`

        req.requests.push(
          {
            type: 'add',
            transactionId: null,
            ownerId: loanerId!,
            counterPartyId: borrowerId!,
            description: `${capitalizeString(from)} lent to ${capitalizeString(to)}`,
            amount: amount,
            refId,
          },
          {
            type: 'add',
            transactionId: null,
            ownerId: borrowerId!,
            counterPartyId: loanerId!,
            description: `${capitalizeString(to)} borrowed from ${capitalizeString(from)}`,
            amount: -amount,
            refId,
          }
        )
      }
    })

    const res = await axios.post('https://poker-board.herokuapp.com/api/v1/transactions', { ...req })
    dispatch(loadGame(res.data as Game))
    resetForm({})
  }

  const renderFields = [
    { from: 'from0', to: 'to0', amount: 'amount0' },
    { from: 'from1', to: 'to1', amount: 'amount1' },
  ]

  return (
    <div className="my-6 mx-4 bg-gray-300 rounded shadow">
      <div className="pt-4 pl-8 font-bold text-xl text-gray-700 shadow">Add transactions</div>
      <Formik
        initialValues={{ from0: '', to0: '', amount0: game!.buyIn, from1: '', to1: '', amount1: game!.buyIn }}
        onSubmit={handleSubmit}
      >
        {(props: FormikProps<FormValues>) => (
          <Form className="px-4 border-2">
            {renderFields.map(({ from, to, amount }) => (
              <div className="flex my-3 px-3 items-end justify-between">
                <div className="w-1/3 pr-2">
                  <div className="pb-1 px-1 font-mono font-medium text-xs text-gray-600">From</div>
                  <Field
                    className="mx-1 p-1 w-full font-mono bg-gray-200 text-gray-800 text-sm"
                    as="select"
                    name={from}
                  >
                    <option value="" />
                    {players.map((player) => (
                      <option value={capitalizeString(player.name)}>{capitalizeString(player.name)}</option>
                    ))}
                  </Field>
                </div>
                <div className="w-1/3 pr-2">
                  <div className="pb-1 px-1 font-mono font-medium text-xs text-gray-600">To</div>
                  <Field className="mx-1 p-1 w-full font-mono bg-gray-200 text-gray-800 text-sm" as="select" name={to}>
                    <option value="" />
                    {players.map((player) => (
                      <option value={capitalizeString(player.name)}>{capitalizeString(player.name)}</option>
                    ))}
                    <option value="Buy-out">Buy out</option>
                  </Field>
                </div>
                <div className="w-1/3 pl-1">
                  <div className="pb-1 px-1 font-mono font-medium text-xs text-gray-600">Amount</div>
                  <Field
                    className="py-1/2 px-2 w-full font-mono font-medium text-gray-800 border border-gray-200 border-opacity-25 rounded bg-gray-200 outline-none"
                    placeholder={game!.buyIn}
                    name={amount}
                  />
                </div>
              </div>
            ))}
            <div className="m-4">
              <button
                className="p-2 border-2 border-white rounded-lg bg-gray-800 text-white font-mono font-semibold outline-none"
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}
