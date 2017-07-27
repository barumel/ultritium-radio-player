import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise  from 'redux-promise-middleware';
import reducers from './Reducers';

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducers, middleware);
