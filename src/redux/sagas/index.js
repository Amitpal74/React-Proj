import { takeLatest } from "redux-saga/effects";  //takeEvery
import { GET_LOGIN, GET_SIGNUP } from "../actions/actionTypes";
import { getLogin, getSignUp } from './loginRelatedSagas';


export function* watchAppUser(){
    yield takeLatest(GET_LOGIN, getLogin)
    yield takeLatest(GET_SIGNUP, getSignUp)
}