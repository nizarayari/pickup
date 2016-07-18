import { DETERMINED_LOCATION } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case DETERMINED_LOCATION:
      return action.payload;
  }
  return state;
}
