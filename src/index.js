import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import userReducer from './reducers/userReducer'
import postsReducer from './reducers/postsReducer'

import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk'; //API support

import {Provider} from 'react-redux'; //let App access to store

const allStoreEnhancerMW = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const combinedReducer = combineReducers({
  posts: postsReducer,
  users: userReducer
})

const store = createStore(combinedReducer,{
  posts:["Nokia 6"],
  users: ["Duminda"]
},
allStoreEnhancerMW
);

const userAction = {
  type : "updateUser",
  payload : {
    users : ["Ishara"]
  } 
}

store.dispatch(userAction);

console.log(store.getState());


ReactDOM.render(<Provider store={store}><App aRandomProp="whatever"/></Provider>, document.getElementById('root'));
registerServiceWorker();
