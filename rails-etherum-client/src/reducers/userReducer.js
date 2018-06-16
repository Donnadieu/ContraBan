export default (state = {is_authenticated: false}, action) => {
  switch ( action.type ) {

    case 'USER_LOGIN':
      if (action.payload.is_authenticated === true) {
        const currentUser = Object.assign({}, action.payload)
        return currentUser
      }else {
        return Object.assign({}, state, action.payload)
      }

    case 'USER_LOGOUT':
    const currentUser = Object.assign({}, {is_authenticated: false}, action.payload)
    return currentUser

    case 'USER_SIGNUP':
      if (action.payload.is_authenticated === true) {
        const currentUser = Object.assign({}, action.payload)
        return currentUser
      }else {
        return Object.assign({}, state, action.payload)
      }
    case 'CREATE_CONTRACT':
      const newContract =  action.payload.contract
      if (newContract !== undefined) {
        const user = Object.assign({}, action.payload.currentUser, { message: 'Succesfully created a contract' })
        user.current_contracts.push(newContract)
        return user
      } else {
        return Object.assign({}, state, action.payload)
      }
    case 'TRANSFER_CONTRACT':
    debugger
      if (action.payload.currentUser === undefined) {
        return Object.assign({}, state, action.payload)
      }else {
        const currentUser = Object.assign({}, state, action.payload.currentUser, { message: 'Succesfully transfered ownership' })
        return currentUser
      }
    default:
      return state
  }
}
