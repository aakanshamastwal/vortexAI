import { combineReducers } from 'redux'
import { loginreducer } from './Authentication/Reducers';

export default combineReducers({
    authentication: loginreducer
})

// export default rootReducer;