export var loadMarketingCasePlanningEntries = (shopNo, caseNo) => {
  return (dispatch, getState) => {
    // Ajax call
    var str = 'https://react.mindworking.eu/resources/shops/' + shopNo + '/cases/' + caseNo + '/marketing/caseplanningentries.json?deviceid=ipad';
    console.log("loadMarketingCasePlanningEntries: ", str);
    $.get(str, function (result) {
      dispatch(showMarketingCasePlanningEntries(result));
    });
  }
}

export var showMarketingCasePlanningEntries = (result) => {
  return {
    type: 'SHOW_MARKETING_CASE_PLANNING_ENTRIES',
    result
  }
}
