

export var startGlobalSearch = (searchValue, shopsStr) => {
  return (dispatch, getState) => {
    // Ajax call
    var str = 'https://react.mindworking.eu/resources/search/Cases.json?search=' + searchValue + '&shops=' + shopsStr + '&deviceid=ipad&maxresponse=10';
      $.get(str, function (result) {
        dispatch(showSearchResults(result));
      });

  }
}

export var showSearchResults = (result) => {
  return {
    type: "SEARCH_RESULT",
    result
  }
}
