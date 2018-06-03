import fetch from 'isomorphic-fetch'
import history from '../history'

export const loginUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'LOGGIN_ATTEMPT'})
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
        if (Number.isInteger(loginResponseJson)) {
          let loginAttempt = { status: loginResponseJson, is_authenticated: false };
          dispatch({
            type: 'USER_LOGIN',
            payload: loginAttempt
           })
        } else {
          let currentUser = Object.assign({}, loginResponseJson, {is_authenticated: true})
          dispatch({
            type: 'USER_LOGIN',
            payload: currentUser
           })
           history.push("/")
        }
    })
  }
}

export const logoutUser = (currentUser) => {
  return (dispatch) => {
    dispatch({type: 'LOGGING_USER_OUT'})
    return fetch(`http://localhost:3000/api/auth/logout?user_email=${currentUser.email}&user_token=${currentUser.authentication_token}`,{
      method: "DELETE"
    })
    .then(
      dispatch({
        type: 'USER_LOGOUT'
      })
    )
    history.push("/login")
  }
}
