import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './Login/reducer';

const reducer = combineReducers({loginReducer});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
