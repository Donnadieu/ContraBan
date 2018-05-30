import fetch from 'isomorphic-fetch'

export function loginUser(values) {
  return function(dispatch){
    dispatch({type: 'LOGGING_USER'})
    return fetch(`http://localhost:3000/api/auth/login?email=${values.email}&password=${values.password}`, {
      method: "POST"
    })
      .then(res => {
        if (res.status === 200) {
          return res.json()
        } else {
          return res.status
        }
      })
      .then(loginResponseJson => {
        if (loginResponseJson === 401) {
          let loginAttempt = {status: loginResponseJson};
          dispatch({
            type: 'USER_LOGIN',
            payload: loginAttempt
           })
        } else {
          let user = {currentUser: loginResponseJson}
          dispatch({
            type: 'USER_LOGIN',
            payload: user
           })
        }
    })
  }
}
