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
        contract["url"] = action.payload.url
        return [...state, contract]
      } else {
        return state
      }
    case 'ADD_URL_TO_CONTRACT':
      let filteredContracts = [...state].filter( contract => contract.blockchain_id !== action.payload.contract.blockchain_id)
      let findContract = [...state].find(contract => action.payload.contract.blockchain_id ===  contract.blockchain_id)
      findContract['url'] = action.payload.url
      return [...filteredContracts, findContract]
    default:
      return state
  }
}
