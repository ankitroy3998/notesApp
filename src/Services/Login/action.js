import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from './constant';

export const notesLogin = (username, password) => dispatch => {
  dispatch({
    type: LOGIN_START,
  });
  fetch('https://nodejsapp20.herokuapp.com/api/authenticate', {
    method: 'POST',
    headers: {Accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log(responseJson);
      if (responseJson.status === true) {
        console.log(responseJson.id);
        dispatch({
          type: LOGIN_SUCCESS,
          data: responseJson.id,
        });
      } else {
        dispatch({
          type: LOGIN_FAILURE,
        });
      }
    });
};
