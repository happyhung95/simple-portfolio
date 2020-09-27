import React from 'react'
import { Transition } from '@tailwindui/react'

type Props = {
  children: React.ReactNode
  showCondition: boolean
}

const CustomTransition = ({ children, showCondition }: Props) => (
  <Transition
    show={showCondition}
    enter="transition ease-out duration-200 transform"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="transition ease-in duration-100 transform"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    {children}
  </Transition>
)

export default CustomTransition
