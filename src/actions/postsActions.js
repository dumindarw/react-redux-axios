import axios from 'axios';
export const POSTS_GET_ACTION = "post:getPosts";

export function getPosts(list = []){
    return {
        type: POSTS_GET_ACTION,
        payload: list
    }
}

export function getPostsAPIrequest(){
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(function(res){              
                dispatch(getPosts(res.data))
            }).catch(function(err){
                console.log(err.response);
            })
    }
}