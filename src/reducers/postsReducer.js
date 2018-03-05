import {POSTS_GET_ACTION} from '../actions/postsActions'

export default function productsReducer(state = [], action){

    switch(action.type){
        case POSTS_GET_ACTION:
          return action.payload;
        default:
         return state;
      }

}