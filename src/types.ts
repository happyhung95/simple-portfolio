export type Transaction = {
  _id: string
  ownerId: string
  counterPartyId: string
  refId: string
  description: string
  amount: number
  createdAt: string
}

export type Player = {
  _id: string
  name: string
  balance: number
  transactions: Transaction[]
}

export type Game = {
  _id: string
  name: string
  buyIn: number
  players: Player[]
  createdAt: string
  updatedAt: string
}
