export var toggleMenuReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return !state;
      break;
    default:
      return state;
  }
}

export var popOverReducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_POP_OVER':
      console.log("inside SHOW_POP_OVER");

      return [
        action.value,
        action.opener
      ]
      break;
    default:
      return state;
  }
}

export var indrykningerReducer = (state = false, action) => {
  switch (action.type) {
    case 'NY_INDRYKNING':
      return action.value;
      break;
    default:
      return state;
  }
}


//
export var storesReducer = (state = [], action) => {
  switch (action.type) {
    case "SHOW_STORES":
      return [
        ...action.stores
      ];
    default:
      return state;

  }
}


//
export var customerReducer = (state = {}, action) => {
  switch (action.type) {
    case "CURRENT_CUSTOMER":
      return { ...action.payload }
  }
  return state;
}
