export var searchReducer = ( state = {}, action ) => {

  switch (action.type) {
    case 'SEARCH_RESULT':
      return {
        result: action.result
      }
      break;
    default:
     return state;
  }
}
