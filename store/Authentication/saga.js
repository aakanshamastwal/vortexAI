// import { Api } from "./Api";
import { takeLatest, call, put } from "redux-saga/effects";
import * as Actions from "./Actions";

function* loginsubmit(action) {
    return true;
}

export default function* watchLogin() {
    yield takeLatest(Actions.SEND_LOGIN_DATA, loginsubmit);
}
