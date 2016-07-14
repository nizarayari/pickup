import { SEARCH_GAMES } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case SEARCH_GAMES:
      return action.payload;
  }
  return state;
}
