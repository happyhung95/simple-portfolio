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

export type GameName = {
  _id: string
  name: string
}

export type Game = {
  _id: string
  name: string
  buyIn: number
  players: Player[]
  createdAt: string
  updatedAt: string
  gameClosed: boolean
}

export type SVGProps = {
  className: string
}

export const LOAD_GAME = 'LOAD_GAME'
export const LOAD_ALL_GAMES = 'LOAD_ALL_GAMES'
export const TOGGLE_GAME_SELECT = 'TOGGLE_GAME_SELECT'
export const TOGGLE_GAME_LIST = 'TOGGLE_GAME_LIST'
export const TOGGLE_CREATE_GAME = 'TOGGLE_CREATE_GAME'

export type LoadAllGamesAction = {
  type: typeof LOAD_ALL_GAMES
  payload: {
    allGames: GameName[]
  }
}

export type LoadGameAction = {
  type: typeof LOAD_GAME
  payload: {
    game: Game
  }
}

export type ToggleGameSelect = {
  type: typeof TOGGLE_GAME_SELECT
  payload: {
    showGameSelect: boolean
  }
}

export type ToggleGameList = {
  type: typeof TOGGLE_GAME_LIST
  payload: {
    showGameList: boolean
  }
}

export type ToggleCreateGame = {
  type: typeof TOGGLE_CREATE_GAME
  payload: {
    showCreateGame: boolean
  }
}

export type Actions = LoadAllGamesAction | LoadGameAction | ToggleGameSelect | ToggleGameList | ToggleCreateGame

export type PokerBoardState = {
  allGames: GameName[] | undefined
  game: Game | undefined
  showGameSelect: boolean
  showGameList: boolean
  showCreateGame: boolean
}

export type AppState = {
  pokerBoard: PokerBoardState
}
