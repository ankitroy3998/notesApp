import {SIGNUP_SUCCESS} from './constant';

export const notesSignup = (
  email,
  username,
  password,
  phoneNumber,
) => dispatch => {
  fetch('https://nodejsapp20.herokuapp.com/api/users', {
    method: 'POST',
    headers: {Accept: 'application/json', 'content-type': 'application/json'},
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
      phoneNumber: phoneNumber,
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(responseJson => {
      console.log(responseJson);
      dispatch({
        type: SIGNUP_SUCCESS,
        data: responseJson,
      });
    });
};
