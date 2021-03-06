import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './allReducers';
import rootSaga from './sagas';
import createSagaMiddleware from 'redux-saga';

console.log(reducer)

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (typeof window !== 'undefined') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const configureStore = createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


export default configureStore;