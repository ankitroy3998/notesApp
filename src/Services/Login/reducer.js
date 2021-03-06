import {LOGIN_SUCCESS, SIGNUP_SUCCESS} from './constant';

const initialState = {
  id: '',
};

const loginReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        id: action.data,
      };
    }
    case SIGNUP_SUCCESS: {
      return {
        ...state,
        id: action.data,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
