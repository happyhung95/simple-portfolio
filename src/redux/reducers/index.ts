/* eslint-disable indent */
import { combineReducers } from 'redux'

import {
  PokerBoardState,
  Actions,
  LOAD_ALL_GAMES,
  LOAD_GAME,
  TOGGLE_CREATE_GAME,
  TOGGLE_GAME_LIST,
  TOGGLE_GAME_SELECT,
} from '../../types'

const initialState: PokerBoardState = {
  allGames: undefined,
  game: undefined,
  showGameSelect: true,
  showGameList: false,
  showCreateGame: false,
}

function pokerBoard(state: PokerBoardState = initialState, action: Actions): PokerBoardState {
  switch (action.type) {
    case LOAD_ALL_GAMES: {
      return { ...state, ...action.payload }
    }
    case LOAD_GAME: {
      return { ...state, ...action.payload }
    }
    case TOGGLE_CREATE_GAME: {
      return { ...state, ...action.payload }
    }
    case TOGGLE_GAME_LIST: {
      return { ...state, ...action.payload }
    }
    case TOGGLE_GAME_SELECT: {
      return { ...state, ...action.payload }
    }
    default:
      return state
  }
}

const createRootReducer = () => combineReducers({ pokerBoard })

export default createRootReducer
