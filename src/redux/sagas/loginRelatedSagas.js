import { put, call } from "redux-saga/effects";
import * as actions from '../actions';
import { getLoginCheck, getSignUpCheck } from "../endPoints/loginRelatedApi's"

export function* getLogin(action) {
    try {
        let response = null;
        response = yield call(getLoginCheck, action.payload)

        if (response) {
            console.log(response);
            yield put(actions.setLogin)
        }
    } catch (err) {
        console.log(err);
    }
}

export function* getSignUp(action) {
    try {
        let response = null;
        response = yield call(getSignUpCheck, action.payload)

        if (response) {
            console.log(response);
            yield put(actions.setSignUp)
        }
    } catch (err) {
        console.log(err);
    }
}