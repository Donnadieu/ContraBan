export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CONTRACTS':
      if (action.currentUser.is_authenticated === true) {
        const allContracts = action.allContracts
        return allContracts
      }else {
        return state
      }
    default:
      return state
  }
}
