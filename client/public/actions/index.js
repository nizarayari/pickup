import axios from 'axios';
import { browserHistory } from 'react-router';

export const SUBMIT_GAME = 'SUBMIT-GAME';
export const GET_GAMES = 'GET-GAMES';

export function submitGame(gameObj) {
  return function(dispatch) {
    axios.post('api/games', gameObj)

      .then(function(response) {
        return axios.get('/api/games')
      })
      .then(function(response) {
        console.log(response, 'response data')
        browserHistory.push('/GameListHome')
        dispatch({ type: GET_GAMES, payload: response.data })
      })
      .catch(function(error) {
        console.log('there was an error in the actions page', error)
      })
  }    
}