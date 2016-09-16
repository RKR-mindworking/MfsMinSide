import axios from 'axios';



export var toggleMenu = () => {
  return {
    type: 'TOGGLE_MENU'
  };
};

export var showPopOver = (value, opener) => {
  return {
    type: 'SHOW_POP_OVER',
    value,
    opener
  };
};

export var nyIndrykning = (value) => {
  return {
    type: 'NY_INDRYKNING',
    value
  };
};

export var nySag = (value) => {
  return {
    type: 'NY_SAG',
    value
  }
}

/*
 CASES ( Sager )
*/

// Async Action
export var startLoadVurderingCasesFromShop = (shopId) => {
  return (dispatch, getState) => {
    // Ajax call
    var str = 'https://react.mindworking.eu/resources/shops/' + shopId + '/cases/cases.json?deviceid=ipad&r=' + Math.random();

    axios.get(str)
      .then(function (response) {
        dispatch(addVurderingCases(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }


}

export var addVurderingCases = (cases) => {
  return {
    type: 'ADD_VURDERING_CASES',
    cases
  }
}

export var getCaseDocuments = () => {
  return (dispatch, getState ) => {

  var str = 'http://react.mindworking.eu/resources/shops/123/cases/13249990/casemedia/casedocuments.json?deviceid=ipad&r=' + Math.random();

  axios.get(str)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export var showStores = ( stores ) => {
  return {
    type :"SHOW_STORES",
    stores
  }
}




//
export var setCurrentCustomer = ( customer ) => {
  return {
    type: "CURRENT_CUSTOMER",
    payload: customer
  }
}
