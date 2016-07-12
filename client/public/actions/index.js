import axios from 'axios';

export const SUBMIT_GAME = 'SUBMIT-GAME';

const root_URL = '';
const request_URL = '/api/games';

export function submitGame(gameObj) {
  const url = root_URL + request_URL;
  axios.post(url, gameObj)
    .then({
      //react route
    })
    .catch({

    })
}