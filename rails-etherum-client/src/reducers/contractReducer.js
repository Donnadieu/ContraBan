export default (state = [], action) => {
  switch (action.type) {

    case 'FETCH_CONTRACTS':
      if (state.is_authenticated === true) {
        const allContracts = Object.assign({}, action.payload.allContracts)
        return Object.assign({}, allContracts)
      }else {
        return state
      }
    default:
      return state
  }
}
