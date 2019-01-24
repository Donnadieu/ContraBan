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
      case 'ADD_URL_TO_CONTRACT':
        let contracts = [...state.filter( contract => contract.blockchain_id !== action.payload.id)]
        let findContract = state.find( contract => contract.blockchain_id === action.payload.id)

        contract['image_url'] = action.payload.url
        contracts.push(contract)

      return contracts
    default:
      return state
  }
}
