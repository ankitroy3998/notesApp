import {
  PERSONAL,
  WORK,
  IDEAS,
  LISTS,
  INCREMENT_PC,
  INCREMENT_WC,
  INCREMENT_IC,
  INCREMENT_LC,
  ADD_NOTES,
  GET_NOTES,
  UPDATE_CATEGORY,
  DELETE_NOTE,
  DECREMENT_PC,
  DECREMENT_WC,
  DECREMENT_IC,
  DECREMENT_LC,
} from './constant';

const initialState = {
  pc: 0,
  wc: 0,
  ic: 0,
  lc: 0,
  selectedCategory: '',
  addNote: [],
};

const notesReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case PERSONAL:
      return state;
    case IDEAS:
      return state;
    case WORK:
      return state;
    case LISTS:
      return state;
    case INCREMENT_PC:
      return {
        ...state,
        pc: state.pc + 1,
      };
    case INCREMENT_WC:
      return {
        ...state,
        wc: state.wc + 1,
      };
    case INCREMENT_IC:
      return {
        ...state,
        ic: state.ic + 1,
      };
    case INCREMENT_LC:
      return {
        ...state,
        lc: state.lc + 1,
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        selectedCategory: action.data,
      };
    case ADD_NOTES: {
      return state;
    }
    case GET_NOTES: {
      return {...state, addNote: action.data};
    }
    case DELETE_NOTE: {
      return state;
    }
    case DECREMENT_PC:
      return {
        ...state,
        pc: state.pc - 1,
      };
    case DECREMENT_WC:
      return {
        ...state,
        wc: state.wc - 1,
      };
    case DECREMENT_IC:
      return {
        ...state,
        ic: state.ic - 1,
      };
    case DECREMENT_LC:
      return {
        ...state,
        lc: state.lc - 1,
      };
    default:
      return state;
  }
};

export default notesReducer;
