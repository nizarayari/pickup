import { POSSIBLE_LOCATIONS } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case POSSIBLE_LOCATIONS:
      return action.payload;
  }
  return state;
}
