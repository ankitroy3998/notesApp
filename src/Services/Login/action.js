import {LOGIN_SUCCESS} from './constant';

export const notesLogin = (username, password) => dispatch => {
  return new Promise(function(resolve, reject) {
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
          resolve(200);
          dispatch({
            type: LOGIN_SUCCESS,
            data: responseJson.id,
          });
        } else {
          reject('Error');
        }
      });
  });
};
