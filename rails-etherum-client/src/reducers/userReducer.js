export default (state = [], action) => {
  switch ( action.type ) {
    case "USER_LOGIN":
      if (action.payload.currentUser) {
        console.log(action.payload.currentUser);
        const currentUser = Object.assign({}, action.payload.currentUser);
        return [ ...state, currentUser ];
      }
      break
    default:
      return state
  }
}
// state = [
//   {
//     currentUser: {
//       contracts: [
//         'dgvfhsdvbfjbsd5454', 'dknvkldcnv23545363'
//       ]
//     }
//     contracts: [
//       {id: 'dgvfhsdvbfjbsd5454'},
//       {id: 'dknvkldcnv23545363'},
//     ]
//   }
// ]
