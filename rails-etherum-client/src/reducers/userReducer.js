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
    const currentUser = Object.assign({}, {is_authenticated: false})
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
        const user = Object.assign({}, action.payload.currentUser)
        user.current_contracts.push(newContract)
        return user
      } else {
        return Object.assign({}, state, action.payload)
      }
    case 'TRANSFER_CONTRACT':
      if (action.payload.currentUser === undefined) {
        return Object.assign({}, state, action.payload)
      }else {
        const currentUser = Object.assign({}, action.payload.currentUser)
        return currentUser
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
