import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from './constant';

const initialState = {
  loading: false,
  loginSuccess: false,
  loginFailure: false,
  id: '',
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_START: {
      return {...state, loading: true};
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        id: action.data,
        loading: false,
        loginSuccess: true,
      };
    }
    case LOGIN_FAILURE: {
      return {...state, loginFailure: true, loading: false};
    }
    default:
      return state;
  }
};

export default loginReducer;
