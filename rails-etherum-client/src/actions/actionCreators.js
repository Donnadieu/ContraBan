import fetch from 'isomorphic-fetch'
import history from '../history'

export const loginUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'LOGGIN_ATTEMPT'})
    return fetch(`http://localhost:3000/api/auth/login`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        { "user": {
          "email" : values.email,
          "password" : values.password
        }
      })
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
          let loginAttempt = { status: loginResponseJson, is_authenticated: false }
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
        } history.push('/dashboard')
    })
  }
}

export const logoutUser = (currentUser) => {
  return (dispatch) => {
    dispatch({type: 'LOGGING_USER_OUT'})
    return fetch(`http://localhost:3000/api/auth/logout`,{
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token
      },
      body: JSON.stringify(
        { "user": {"email" : currentUser.email}})
    })
    .then(
      dispatch({
        type: 'USER_LOGOUT'
      })
    )
  }
}

export const signupUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'SIGNUP_ATTEMPT'})
    return fetch(`http://localhost:3000/api/auth/users`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
          { "user": {
            "email" : values.email,
            "password" : values.password
          }
        }),
      })
      .then(response => {
        if (response.status !== 201) {
          response.json()
          .then(signupResponse => {
            let signupAttempt = { message: signupResponse, is_authenticated: false };
            dispatch({
              type: 'USER_SIGNUP',
              payload: signupAttempt
             })
          })
        } else {
          response.json()
          .then(signupResponse => {
            let currentUser = Object.assign({}, signupResponse, {is_authenticated: true})
            dispatch({
              type: 'USER_SIGNUP',
              payload: currentUser
             })
          })
        }history.push('/dashboard')
      })
  }
}

export const fetchContracts = (currentUser) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_CONTRACTS'})
    return fetch(`http://localhost:3000/api/auth/contracts`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token
      }
    })
    .then(response => {
      response.json()
      .then(responseJson => {
        let allContracts = responseJson.slice(0)
        dispatch({
          type: 'FETCH_CONTRACTS',
          allContracts: allContracts,
          currentUser: currentUser
        })
      })
    })

  }
}
