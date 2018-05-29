import fetch from 'isomorphic-fetch'

export function loginUser(values) {
  return function(dispatch){
    dispatch({type: 'LOGGING_USER'})
    return fetch(`http://localhost:3000/api/auth/login?email=${values.email}&password=${values.password}`, {
      metoth: "POST"
    })
      .then(res => {
        return res
      }).then(responseJson => {
        
        // dispatch({type: 'LOGIN_USER', payload: responseJson})
    })
  }
}
