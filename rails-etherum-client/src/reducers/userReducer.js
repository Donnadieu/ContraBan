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
      console.log(action);
      // if (action.payload.status === 200) {
      //   const currentUser = {id: "", email: "", authToken: ""}
      //   debugger
      // }
      return state;
    default:
      return state
  }
}
