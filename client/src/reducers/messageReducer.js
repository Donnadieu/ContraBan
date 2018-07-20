export default (state = [], action) => {
  switch (action.type) {
    case 'SUCCESSFUL_USER_LOGIN':
      let message = action.payload.message
      return message
    case 'UNSUCCESSFUL_USER_LOGIN':
      message = action.payload.message
      return message
    case 'USER_LOGOUT':
      message = action.payload.message
      return message
    case 'UNSUCCESSFUL_USER_SIGNUP':
      message = action.payload.message
      return message
    case 'SUCCESSFUL_USER_SIGNUP':
      message = action.payload.message
      return message
    default:
      return state
  }
}
