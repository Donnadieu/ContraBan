export default (state = { is_authenticated: false }, action) => {
  switch ( action.type ) {

    case 'SUCCESSFUL_USER_LOGIN':
      if (action.payload.currentUser.is_authenticated === true) {
        const currentUser = Object.assign({}, action.payload.currentUser)
        return currentUser
      }else {
        return state
      }

    case 'USER_LOGOUT':
      const currentUser = Object.assign({}, {is_authenticated: false})
      return currentUser

    case 'SUCCESSFUL_USER_SIGNUP':
      if (action.payload.currentUser.is_authenticated === true) {
        const currentUser = Object.assign({}, action.payload.currentUser)
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
      if (action.payload.currentUser === undefined) {
        return Object.assign({}, state, action.payload)
      }else {
        const currentUser = Object.assign({}, state, action.payload.currentUser, { message: 'Succesfully transfered ownership' })
        return currentUser
      }
    case 'TOGGLE_CONTRACTS':
      return Object.assign({}, state, {isHidden: !state.isHidden})
    default:
      return state
  }
}
