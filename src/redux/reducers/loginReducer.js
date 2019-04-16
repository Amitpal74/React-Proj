import { SET_LOGIN, SET_SIGNUP } from "../actions/actionTypes";

const initialState = {}
export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state, loginData: action.payload };
        case SET_SIGNUP:
            return { ...state, signUpData: action.payload}    
        default:
            return state;
    }
}   