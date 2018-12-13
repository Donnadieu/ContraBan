export default (state = [], action) => {
  switch (action.type) {
    case 'SUCCESSFUL_USER_LOGIN':
      return action.payload.message
    case 'UNSUCCESSFUL_USER_LOGIN':
      if (!!action.payload.message) {
        return action.payload.message
      }else{
        return action.payload.error
      }
    case 'USER_LOGOUT':
      return action.payload.message
    case 'UNSUCCESSFUL_USER_SIGNUP':
      if (!!action.payload.message) {
        return action.payload.message
      }else{
        return action.payload.error
      }
    case 'SUCCESSFUL_USER_SIGNUP':
      return action.payload.message
    default:
      return state
  }
}
