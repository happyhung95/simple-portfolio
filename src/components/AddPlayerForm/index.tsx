import React, { useState } from 'react'
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldArray,
  FieldProps,
} from 'formik'

import { capitalizeString } from '../../helpers/index'
import { Game } from '../../types'

type Props = {
  game: Game
  setGame: (value: React.SetStateAction<Game | undefined>) => void
}

export const AddPlayerForm = ({ game, setGame }: Props) => {
  return (
    <div className="my-6 mx-4 bg-gray-300 rounded shadow">
      <div className="pt-4 pl-5 font-bold text-xl text-gray-700 shadow">
        Add players
      </div>
      <Formik
        initialValues={{ names: ['','',''] }}
        onSubmit={(values) => console.log(values)}
        render={({ values }) => (
          <Form className=" px-4 border-2">
            <FieldArray
              name="names"
              render={(arrayHelpers) => (
                <div>
                  {values.names && values.names.length > 0 ? (
                    values.names.map((name, index) => (
                      <div
                        key={index}
                        className="my-2 flex justify-around items-center"
                      >
                        <p className="text-gray-600 font-bold">Name:</p>
                        <Field
                          className=" w-1/2 py-1/2 px-2 font-mono font-medium text-white border border-gray-600 border-opacity-25 rounded bg-gray-500 outline-none"
                          name={`names.${index}`}
                        />
                        <button
                          className="mx-1 px-2 font-bold text-xl text-white border-2 border-gray-600 rounded-lg bg-gray-500"
                          type="button"
                          onClick={() => arrayHelpers.insert(index + 1, '')} // insert an empty string at a position
                        >
                          +
                        </button>
                        <button
                          className="px-2 font-bold text-xl text-white border-2 border-gray-600 rounded-lg bg-gray-500"
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a name from the list
                        >
                          -
                        </button>
                      </div>
                    ))
                  ) : (
                    <button
                      className="my-2 px-3 py-1/2 border-2 border-gray-600 bg-gray-600 rounded-md text-white font-semibold shadow"
                      type="button"
                      onClick={() => arrayHelpers.push('')}
                    >
                      {/* show this when user has removed all friends from the list */}
                      Add a name
                    </button>
                  )}
                  {values.names.length > 0 && (
                    <div className="mt-2 mb-6">
                      <button
                        className="p-2 border-2 border-white rounded-lg bg-gray-800 text-white font-mono font-semibold"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  )
}
