import * as ACTIONS from './Actions';

export const initiate_login = (payload) => {
    return {
        type: ACTIONS.SEND_LOGIN_DATA,
        payload
    }
}