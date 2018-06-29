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
      let contract = action.payload.contract
      if (contract !== undefined) {
        return [...state, contract]
      } else {
        return state
      }
    case 'ADD_LIKE_CONTRACT':
      let contracts = state.map(contract => Object.assign({}, contract));
      contracts.map( contract => {
        if (contract.id === action.contract.id) {
          contract.likes = action.contract.likes
        }
      })
      return contracts
    default:
      return state
  }
}
