import axios from 'axios';
export const USER_UPDATE_ACTION = "user:updateUser";
export const USERS_GET_ACTION = "user:getUsers";

export function updateUser(newUser){
    return {
        type : USER_UPDATE_ACTION,
        payload : {
            users : [newUser]
        }
    }
}

export function getUsers(list = []){
    console.log(list)
    return {
        type : USERS_GET_ACTION,
        payload : {
            users : list
        }
    }
}

export function getUsersAPIrequest(){
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function(res){
            dispatch(getUsers(res.data.map(data => {
                return {id: data.id, name: data.name}
            })))
        })
        .catch(function(err){

        })
    }
}




