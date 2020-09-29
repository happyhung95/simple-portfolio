import {
  Game,
  GameName,
  LOAD_ALL_GAMES,
  LOAD_GAME,
  TOGGLE_CREATE_GAME,
  TOGGLE_GAME_LIST,
  TOGGLE_GAME_SELECT,
  Actions,
} from '../../types'

export function loadAll(allGames: GameName[]): Actions {
  return {
    type: LOAD_ALL_GAMES,
    payload: { allGames },
  }
}

export function loadGame(game: Game): Actions {
  return {
    type: LOAD_GAME,
    payload: { game },
  }
}

export function toggleGameSelect(showGameSelect: boolean): Actions {
  return {
    type: TOGGLE_GAME_SELECT,
    payload: { showGameSelect },
  }
}

export function toggleGameList(showGameList: boolean): Actions {
  return {
    type: TOGGLE_GAME_LIST,
    payload: { showGameList },
  }
}

export function toggleCreateGame(showCreateGame: boolean): Actions {
  return {
    type: TOGGLE_CREATE_GAME,
    payload: { showCreateGame },
  }
}
