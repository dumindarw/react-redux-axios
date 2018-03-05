import {USER_UPDATE_ACTION, USERS_GET_ACTION} from '../actions/userActions'

export default function userReducer(state= [], {type ,payload} /*destructuring action*/){

    switch(type){
      case USER_UPDATE_ACTION:
        return payload.users;
      case USERS_GET_ACTION:
        return payload.users;
      default:
       return state;
    }
  }