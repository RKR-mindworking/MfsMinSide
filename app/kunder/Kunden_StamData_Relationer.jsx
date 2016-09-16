import React from 'react';
import ContentCollapsable from  'ContentCollapsable';

import TextField from 'material-ui/TextField';
import AutoComplete from 'material-ui/AutoComplete';


const knownRelationTypes = ["Ægtefælle", "Datter", "Søn"]

class Kunden_StamData_Relationer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { relationData:
      {
        relationName: "",
        relationType: ""
      }
    }

    this.handleNewRequest = this.handleNewRequest.bind(this);
  }

  handleNewRequest(chosenRequest, index) {

    this.addRelation(this.refs[`nametextfield`].value,  chosenRequest);

    if (index>-1)  //only allow selected items to be added
    {
      this.refs[`autocomplete`].setState({searchText:''});
      this.refs[`autocomplete`].focus();
    }
  }

  handleAddKeyDown(e) {
     if(e.key === "Enter"){
       this.addRelation();
       e.target.value = "";
     }
  }


  addRelation() {



    var newRelation = {

    }

  }

  render() {
    return (
      <ContentCollapsable
        title="Relationer"
        cardActions = {

          <div style={{display:'flex'}}>
            <TextField style={{paddingLeft:10, marginRight:10}} ref={`nametextfield`} floatingLabelText="Relationens navn" />
            <AutoComplete
              ref={`autocomplete`}
              style={{marginLeft:20}}
              floatingLabelText="Tilføj relationstype"
              filter={AutoComplete.fuzzyFilter}
              dataSource={knownRelationTypes}
              maxSearchResults={5}
              fullWidth={false}
              onKeyDown={ this.handleAddKeyDown}
              onNewRequest={ this.handleNewRequest }
            />

          </div>

        }
      />
    );
  }

}

Kunden_StamData_Relationer.propTypes = {
  customer: React.PropTypes.object
}

export default Kunden_StamData_Relationer;
