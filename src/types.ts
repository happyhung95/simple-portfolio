export type Transaction = {
  _id: string
  ownerId: string
  counterPartyId: string
  refId: string
  description: string
  createdAt: string
}

export type Player = {
  balance: number
  transactions: Transaction[]
}

export type GameObject = {
  _id: string
  name: string
  buyIn: number
  players: Player[]
  createdAt: string
  updatedAt: string
}

export type GameCardProps = {
  game: GameObject | undefined
}

export type GameName = {
  _id: string
  name: string
}