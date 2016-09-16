module.exports = {
  filter(cases, searchText){
    var filteredCases = cases;
    var lowercaseSearchText = searchText.toLowerCase();
    filteredCases = filteredCases.filter((caseObj) => {
      var foundInAdress = caseObj.Address.toLowerCase().indexOf(lowercaseSearchText) > -1;
      var foundInCaseNo = caseObj.CaseNo.toLowerCase().indexOf(lowercaseSearchText) > -1;
      var foundInShopNo = caseObj.ShopNo.toLowerCase().indexOf(lowercaseSearchText) > -1;
      return searchText.length === 0 || foundInAdress || foundInCaseNo || foundInShopNo;
    });
    return filteredCases;
  },

  filterSalgLeje(cases, searchText){
    var filteredCases = cases;
    var lowercaseSearchText = searchText.toLowerCase();
    filteredCases = filteredCases.filter((caseObj) => {
      var foundInCaseNo = caseObj.CaseNo.toLowerCase().indexOf(lowercaseSearchText) > -1;
      var foundInAdress = caseObj.Address.toLowerCase().indexOf(lowercaseSearchText) > -1;
      var foundInType = caseObj.Type.toLowerCase().indexOf(lowercaseSearchText) > -1;
      var foundInTypeDesc = caseObj.TypeDescription.toLowerCase().indexOf(lowercaseSearchText) > -1;
      return searchText.length === 0 || foundInCaseNo || foundInAdress || foundInType || foundInTypeDesc;
    });
    return filteredCases;
  },

  sortByStatus(cases, statusStr) {
    var sortedCases = cases;
    sortedCases = sortedCases.filter((caseObj) => {
      var foundInStatus = caseObj.Status === statusStr;
      return foundInStatus;
    });
    return sortedCases;
  }

};
