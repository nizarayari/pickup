import axios from 'axios';
import { browserHistory } from 'react-router';

export const SUBMIT_GAME = 'SUBMIT-GAME';
export const GET_GAMES = 'GET-GAMES';
export const SEARCH_GAMES = 'SEARCH-GAMES'; 
export const SUBMIT_PLAYER = 'SUBMIT-PLAYER'; 

export function searchGames(searchObj) {
  return function(dispatch) {
    axios({
      method: 'GET',
      url: 'api/games',
      params: searchObj,
    })
      .then(function(response) {
        browserHistory.push('/searchHome')
        dispatch({ type: SEARCH_GAMES, payload: response.data })
      })
  }
}

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
        console.log(error, 'there was an error in the submit game action')
      })
  }    
}

export function submitPlayer(playerObj) {
  const fun = {id: 1, sport: "grape", rules: "7 suck", time: 700, location: [{lat: '48.784284', long: '-9.242931'}], current_players: 9, playersNeeded: 8, created_by: "merik"}
  return function(dispatch) {
    console.log('im inside dispatch')
    dispatch({ type: SUBMIT_PLAYER, payload: fun })
  }



  // return function(dispatch) {
  //   axios.post('/something', playerObj)
  //     .then(function(response) {
  //       dispatch({ type: SUBMIT_PLAYER, payload: response.data})
  //     })
  //     .catch(function(error) {
  //       console.log(error, 'there was an error in the submit player action')
  //     })
  // }
}