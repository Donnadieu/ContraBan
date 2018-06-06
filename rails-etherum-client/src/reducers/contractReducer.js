export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONTRACTS':
      if (state.is_authenticated === true) {
        const allContracts = action.payload.allContracts
        return allContracts
      }else {
        return state
      }
    default:
      return state
  }
}
