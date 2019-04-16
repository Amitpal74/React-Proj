import axios from 'axios';
import { getSignUp } from '../actions';

export const getLoginCheck = (action) =>{
    console.log("action = ",action)
    return axios({
        method: 'POST',
        url: `${action.url}`,
        data: action.body ? action.body: null,
        headers:{
            'Content-Type': 'application/json'
        } 
    })
}

export const getSignUpCheck = (action) =>{
    console.log("action = ", action)
    return axios({
        method: 'POST',
        url: `${action.url}`,
        data: action.body ? action.body: null,
        headers:{
            'Content-type': 'application/json'
        }
    })
}