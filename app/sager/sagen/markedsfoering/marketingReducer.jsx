export var marketingReducer = ( state = [], action ) => {
  switch (action.type) {
    case 'SHOW_MARKETING_CASE_PLANNING_ENTRIES':
    
      var result = JSON.parse(action.result);
      return result;
      break;
    default:
     return state;
  }
}
