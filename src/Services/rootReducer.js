import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from './Login/reducer';
import signupReducer from './SignUp/reducer';
import notesReducer from './Notes/reducer';

const reducer = combineReducers({
  loginReducer,
  signupReducer,
  notesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
