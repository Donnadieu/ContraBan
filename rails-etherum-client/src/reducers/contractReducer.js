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
      const contract = action.payload.contract
      if (contract !== undefined) {
        return [...state, contract]
      } else {
        return state
      }

    default:
      return state
  }
}
