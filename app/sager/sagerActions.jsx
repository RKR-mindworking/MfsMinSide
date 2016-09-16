import axios from 'axios';

export var showSag = (caseObj) => {
  return {
    type: 'SHOW_SAG',
    caseObj
  }
}


export var loadSagsInfo = (shopNo, caseNo) => {
  return (dispatch, getState) => {
    // Ajax call
    var str = 'https://react.mindworking.eu/resources/shops/' + shopNo + '/cases/' + caseNo + '/data/casedata.json?deviceid=ipad&r=' + Math.random();

    axios.get(str)
      .then(function (response) {
        dispatch(sagsInfo(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    }

}

export var sagsInfo = (data) => {
  return {
    type: 'SAGS_INFO',
    data
  }
}

export var saveBoligFakta = (shopno, caseno, field, value) => {
  return ( dispatch, getState ) => {
    var FieldAry = field.split('.').reverse();
    var str = 'https://react.mindworking.eu/resources/shops/' + shopno + '/cases/' + caseno + '/importpartialcasedata.do?deviceid=ipad&response=json&r=' + Math.random();

    axios({
      method: 'post',
      url: str,
      data: '<' + FieldAry[1] + '><' + FieldAry[0] + '>' + value + '</' + FieldAry[0] + '></' + FieldAry[1] + '>'
    }).then( function(response){
      dispatch( sagsInfo(response.data));
      dispatch( dataSaved() );
  });


  }
}

export var dataSaved = () => {
  return {
    type: 'DATA_SAVED'
  }
}
