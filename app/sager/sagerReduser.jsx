export var sagerReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_VURDERING_CASES":
      return action.cases
      break;
    default:
      return state;
  }
}

export var nySagReducer = (state = false, action) => {
  switch (action.type) {
    case 'NY_SAG':
      return action.value;
      break;
    default:
      return state;
  }
}

export var showSagReducer = (state = {}, action) => {
  switch (action.type) {
    case "SHOW_SAG":
    return {
      caseObj:action.caseObj
    }
    break;
    default:
      return state;
  }
}

export var sagsInfoReducer = ( state = {}, action ) => {
  switch (action.type) {
    case 'SAGS_INFO':
      return {
        data: action.data.Case
      }
      break;
    default:
     return state;

  }
}

export var dataSavedReducer = (state = "", action ) => {
  
  switch (action.type) {
    case 'DATA_SAVED':
      return "Data blev gemt korrekt..."
      break;
    default:
      return state;
  }
}
