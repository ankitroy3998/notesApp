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
} from './constant';

const initialState = {
  pc: 0,
  wc: 0,
  ic: 0,
  lc: 0,
  personalCount: 0,
  workCount: 0,
  ideasCount: 0,
  listCount: 0,
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
        pc: state.wc + 1,
      };
    case INCREMENT_IC:
      return {
        ...state,
        pc: state.ic + 1,
      };
    case INCREMENT_LC:
      return {
        ...state,
        pc: state.lc + 1,
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
    default:
      return state;
  }
};

export default notesReducer;
