export default (state = {is_authenticated: false}, action) => {
  switch ( action.type ) {
    
    case 'USER_LOGIN':
      if (action.payload.is_authenticated === true) {
        const currentUser = Object.assign({}, action.payload)
        return Object.assign({}, currentUser)
      }else {
        return state
      }

    case 'USER_LOGOUT':
      const currentUser = Object.assign({}, {is_authenticated: false})
      return Object.assign({}, currentUser)

    case 'USER_SIGNUP':
      if (action.payload.is_authenticated === true) {
        const currentUser = Object.assign({}, action.payload)
        return Object.assign({}, currentUser)
      }else {
        return state
      }

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
//       {id: 'dgvfhsdvbfjbsd5454' ..., history: [{date: '', price: '', owner},...]},
//       {id: 'dknvkldcnv23545363'..., history: [{date: '', price: '', owner},...]},
//       {id: 'jadfbajsbfja45646'...}
//     ]
//   }
// ]
