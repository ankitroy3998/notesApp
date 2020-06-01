import {
  PERSONAL,
  WORK,
  IDEAS,
  LISTS,
  ADD_NOTES,
  GET_NOTES,
  INCREMENT_PC,
  INCREMENT_WC,
  INCREMENT_IC,
  INCREMENT_LC,
  UPDATE_CATEGORY,
  DELETE_NOTE,
  DECREMENT_PC,
  DECREMENT_WC,
  DECREMENT_IC,
  DECREMENT_LC,
} from './constant';

export function notesType(category) {
  return dispatch => {
    switch (category) {
      case 'Personal':
        dispatch({type: PERSONAL});
        break;
      case 'Ideas': {
        dispatch({type: IDEAS});
        break;
      }
      case 'Work':
        dispatch({type: WORK});
        break;
      case 'Lists':
        dispatch({type: LISTS});
        break;
    }
  };
}
export function updateSelectedCategory(selectedCategory) {
  return dispatch => {
    console.log(selectedCategory);
    dispatch({type: UPDATE_CATEGORY, data: selectedCategory});
  };
}
export const addNote = (title, info, id) => dispatch => {
  console.log(id);
  fetch('https://nodejsapp20.herokuapp.com/api/notes/' + id, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify({
      notes: [
        {
          title: title,
          data: info,
        },
      ],
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log(responseJson.data);
      dispatch({
        type: ADD_NOTES,
      });
    });
};

export function updateHome(category) {
  console.log(category);
  return dispatch => {
    switch (category) {
      case 'Personal':
        dispatch({type: INCREMENT_PC});
        break;
      case 'Work':
        dispatch({type: INCREMENT_WC});
        break;

      case 'Ideas': {
        dispatch({type: INCREMENT_IC});
        break;
      }
      case 'Lists':
        dispatch({type: INCREMENT_LC});
        break;
    }
  };
}

export const getNote = id => dispatch => {
  fetch('https://nodejsapp20.herokuapp.com/api/notes/' + id, {
    method: 'GET',
    headers: {Accept: 'application/json', 'content-type': 'application/json'},
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log('response me kya hai', responseJson.response);
      dispatch({
        type: GET_NOTES,
        data: responseJson.response,
      });
    });
};

export const deleteNote = (id, notesId) => dispatch => {
  fetch('https://nodejsapp20.herokuapp.com/api/notes/' + id + '/' + notesId, {
    method: 'DELETE',
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log(responseJson);
      if (responseJson.status === true) {
        console.log(' note deleted');
        dispatch({
          type: DELETE_NOTE,
        });
      } else {
        console.log('Unable to delete note');
      }
    });
};

export function updateNote(title) {
  return dispatch => {
    switch (title) {
      case 'Personal':
        dispatch({type: DECREMENT_PC});
        break;
      case 'Work':
        dispatch({type: DECREMENT_WC});
        break;

      case 'Ideas': {
        dispatch({type: DECREMENT_IC});
        break;
      }
      case 'List':
        dispatch({type: DECREMENT_LC});
        break;
    }
  };
}
