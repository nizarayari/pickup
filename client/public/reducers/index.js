import { combineReducers } from 'redux'
import GamesReducer from './reducer_games'
import SubmitGamesReducer from './reducer_submitGame'
import GetGamesReducer from './reducer_getGames'
import SearchGamesReducer from './reducer_searchGames'

const rootReducer = combineReducers({
  games: GamesReducer,
  submitGame: SubmitGamesReducer,
  getGames: GetGamesReducer,
  searchGames: SearchGamesReducer
})

export default rootReducer;