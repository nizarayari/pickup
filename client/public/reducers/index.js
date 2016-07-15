import { combineReducers } from 'redux'
import GamesReducer from './reducer_games'
import SubmitGamesReducer from './reducer_submitGame'
import GetGamesReducer from './reducer_getGames'
import SearchGamesReducer from './reducer_searchGames'
import PossibleLocations from './reducer_possibleLocations'

const rootReducer = combineReducers({
  games: GamesReducer,
  submitGame: SubmitGamesReducer,
  getGames: GetGamesReducer,
  searchGames: SearchGamesReducer,
  possibleLocations: PossibleLocations
})

export default rootReducer;