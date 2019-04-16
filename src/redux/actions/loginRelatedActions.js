import { GET_LOGIN, SET_LOGIN, GET_SIGNUP, SET_SIGNUP } from './actionTypes'

export const getLogin = (obj) =>{
    console.log(obj);
    return {
        type: GET_LOGIN,
        payload: obj
    }
}

export const setLogin = (obj) =>{
    console.log(obj);
    return{
        type: SET_LOGIN,
        payload: obj
    }
}

export const getSignUp = (obj) =>{
    console.log(obj);
    return{
        type: GET_SIGNUP,
        payload: obj
    }
}

export const setSignUp = (obj) =>{
    console.log(obj);
    return{
        type: SET_SIGNUP,
        payload: obj
    }
}