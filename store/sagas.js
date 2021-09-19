import { all } from 'redux-saga/effects'
import watchLogin from './Authentication/saga';

export default function* () {
    yield all([
        watchLogin()
    ])
}