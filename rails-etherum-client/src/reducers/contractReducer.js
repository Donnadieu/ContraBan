export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONTRACTS':
      if (action.currentUser.is_authenticated === true) {
        const allContracts = action.allContracts
        return allContracts
      }else {
        return state
      }

    case 'USER_LOGOUT':
      const allContracts = []
      return allContracts

    case 'CREATE_CONTRACT':
      const contract = Object.assign({}, action.payload.contract)
      return [...state, contract]
    default:
      return state
  }
}
