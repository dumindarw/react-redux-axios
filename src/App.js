import React, { Component } from 'react';
import './App.css';

//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';
import {updateUser, getUsersAPIrequest} from './actions/userActions'
import {getPostsAPIrequest} from './actions/postsActions'

class App extends Component {

  constructor(props){
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  componentDidMount(){
    this.props.onFetchPosts();
    //this.props.onFetchUsers();
  }

  render() {
    return (
      <div>
        {this.props.users}
        <input type="text" onChange={this.onUpdateUser}/>
        <hr/>
        <h2>Posts</h2>
        <ul>
        {this.props.posts.map(posts => {
          return <li key={posts.title}>{posts.title}</li>
        })}
        </ul>

      </div>
    );
  }

  onUpdateUser(event){
    this.props.onUpdateUser(event.target.value);
  }
}

//connect 'received state from store' to componenet
/*const mapStateToProps = (state, props) => ({
  users : state.users,
  posts : state.posts,
  newProp:props.aRandomProp
});*/

const postsSelector = createSelector(
  state => state.posts,
  posts => posts
);

const usersSelector = createSelector(
  state => state.users,
  users => users
);

//connect 'received state from store' to componenet - using selectors
const mapStateToProps = createSelector(
  postsSelector,/*selecters are composable*/
  usersSelector,
  (posts, users) => ({
    posts,
    users
  })
);

//dispatch actions to component
const mapActionsToProps = /*(dispatch, props) =>*/ {
  //return bindActionCreators({
    onUpdateUser : updateUser,
    onFetchPosts : getPostsAPIrequest,
    onFetchUsers : getUsersAPIrequest
  //}, dispatch);
}

/*const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
  console.log(propsFromState);
  console.log(propsFromDispatch);
  console.log(ownProps);

  return {}
}*/

//connect component App to store
export default connect(mapStateToProps, mapActionsToProps/*, mergeProps*/)(App);
