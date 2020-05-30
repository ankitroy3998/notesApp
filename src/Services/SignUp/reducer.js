import {SIGNUP_SUCCESS} from './constant';

const initialState = {
  signupData: [],
};

const signupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_SUCCESS: {
      return {...state, signupData: action.data};
    }
    default:
      return state;
  }
};

export default signupReducer;
