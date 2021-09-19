import { SEND_LOGIN_DATA } from './Actions';

const initialState = {
};


export const loginreducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_LOGIN_DATA: {
            return {
                ...state, loading: true
            }
        }
        default: {
            return state;
        }
    }
};

