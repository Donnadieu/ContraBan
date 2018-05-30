export default function userReducer(state= [
  {
    currentUser:{
      id: '',
      email: '',
      authToken: ''
    }
  }
], action) {
  switch ( action.type ) {
    case "USER_LOGIN":
      return state;
    default:
      return state
  }
}
