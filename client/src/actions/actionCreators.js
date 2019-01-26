import fetch from 'isomorphic-fetch'
import history from '../history'
import app from '../firebase/index'

export const loginUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'LOGGIN_ATTEMPT'})
    return fetch(`/api/auth/login`, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(
        { "user": {
          "email" : values.email,
          "password" : values.password
        }
      })
    })
    .then(response => {
      if (response.status !== 200) {
        return response.json()
        .then(loginResponseJson => {
          let loginAttempt = loginResponseJson
          dispatch({
              type: 'UNSUCCESSFUL_USER_LOGIN',
              payload: loginAttempt
            })
        })
      } else {
        return response.json()
        .then(loginResponseJson => {
          let currentUser = Object.assign({}, loginResponseJson, {is_authenticated: true})
          let message = `Succesfully Logged in as ${loginResponseJson.email}`
          dispatch({
            type: 'SUCCESSFUL_USER_LOGIN',
            payload: {
              currentUser,
              message
            }
          })
        })
      }
      history.push('/dashboard')
    })
  }
}

export const logoutUser = (currentUser) => {
  return (dispatch) => {
    dispatch({type: 'LOGGING_USER_OUT'})
    return fetch(`/api/auth/logout`,{
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
        type: 'USER_LOGOUT',
        payload: {
          message: 'Succesfully logged out'
        }
      })
    )
  }
}

export const signupUser = (values) => {
  return (dispatch) => {
    dispatch({type: 'SIGNUP_ATTEMPT'})
    return fetch(`/api/auth/users`, {
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
            let signupAttempt = signupResponse
            dispatch({
              type: 'UNSUCCESSFUL_USER_SIGNUP',
              payload: signupAttempt
             })
          })
        } else {
          response.json()
          .then(signupResponse => {
            let currentUser = Object.assign({}, signupResponse, {is_authenticated: true})
            let message = `Succesfully Created an account as ${signupResponse.email}`
            dispatch({
              type: 'SUCCESSFUL_USER_SIGNUP',
              payload: {
                currentUser,
                message
              }
             })
          })
        }history.push('/dashboard')
      })
  }
}

export const fetchContracts = (currentUser) => {
  return (dispatch) => {
    dispatch({type: 'LOADING_CONTRACTS'})
    return fetch(`/api/auth/contracts`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token
      }
    })
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(contracts => {
          let allContracts = contracts.slice(0)
          dispatch({
            type: 'FETCH_CONTRACTS',
            allContracts: allContracts,
            currentUser: currentUser
          })
        })
      } else {
        response.json()
        .then(responseJSON => {
          dispatch({
            type: 'FETCH_CONTRACTS',
            message: responseJSON,
            currentUser: currentUser
          })
        })
      }
    })

  }
}

export const createContract = (values, currentUser) => {
  return (dispatch) => {

    const formData = new FormData()
    formData.append("product_name", values.name)
    formData.append("product_info", values.details)
    formData.append("price", values.price)

    dispatch({type: 'CREATING_CONTRACT'})
    return fetch(`/api/auth/contracts`, {
      method: 'post',
      headers: {
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token
      },
      body: formData
      })
      .then(res => {
        if (res.status === 201 ) {
          res.json()
          .then(contract => {
            app.storage().ref(`images/${contract.blockchain_id}`).put(values.image)
              .then ( () => {
                dispatch({
                  type: 'CREATE_CONTRACT',
                  payload: {
                    contract: contract,
                    currentUser: currentUser
                  }
                })
                history.push(`/dashboard/${currentUser.id}/contracts/${contract.blockchain_id}`)
              })
          })
        } else {
          res.json()
          .then(response => {
            const creationAttempt = { message: response}
            dispatch({
              type: 'CREATE_CONTRACT',
              payload: creationAttempt
            })
          })
        }
      })
  }
}
export const transferContract = (values, currentUser, dispatch, contract) =>{
  return (dispatch) => {
    dispatch({type: 'TRANSFERING_CONTRACT'})
    return fetch(`/api/auth/contracts/${contract.blockchain_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.authentication_token
      },
      body: JSON.stringify(
        { "owner": { "email" : currentUser.email },
          "new_owner": {"email" : values.email },
          "contract": {"price" : values.price }
      })
    })
    .then(response => {
      if (response.status === 200) {
        response.json()
        .then(currentUser => {
          dispatch({
            type: 'TRANSFER_CONTRACT',
            payload: {currentUser}
          })
        })
      }else {
        response.json()
        .then(tranferResponse => {
          const transferAttempt = { message: tranferResponse }
          dispatch({
            type: 'TRANSFER_CONTRACT',
            payload: transferAttempt
          })
        })
      }history.push('/dashboard')
    })
  }
}

export const toggleContracts = () =>{
  return (dispatch) => {
    dispatch({type: 'LOADING_CONTRACTS'})
    return(
      dispatch({
        type: 'TOGGLE_CONTRACTS'
      })
    )
  }
}

export const addUrlToContract = contract => {
  return dispatch => {
    dispatch({type: 'ADDING_URL'})
    return app.storage().ref('images').child(contract.blockchain_id).getDownloadURL()
    .then( url => {
      dispatch({
        type: 'ADD_URL_TO_CONTRACT',
        payload: {
          contract:  contract,
          url: url
        }
      })
    })
  }
}
