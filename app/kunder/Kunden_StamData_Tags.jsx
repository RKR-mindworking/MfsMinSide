import React from 'react';
import Chip from 'material-ui/Chip';
import ContentCollapsable from 'ContentCollapsable';
import AutoComplete from 'material-ui/AutoComplete';


const knownTags = ['Nyhedsbrev', 'Formel 1', 'Golf', 'Julekort', 'Årsvurdering', 'FCK', 'ChampionsLeague', 'Koncert', 'Sport'];

class Kunden_StamData_Tags extends React.Component {

  constructor(props){
    super(props);

    this.state = {chipData: [
      {
        key:0,
        label:"Skole"
      },
      {
        key:1,
        label:"Fritidsklub"
      }
    ]};
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };

    this.handleAddKeyDown = this.handleAddKeyDown.bind(this);
    this.addChip = this.addChip.bind(this);
    this.handleNewRequest = this.handleNewRequest.bind(this);
  }


  handleNewRequest(chosenRequest, index) {

    this.addChip(chosenRequest);

    if (index>-1)  //only allow selected items to be added
    {
      this.refs[`autocomplete`].setState({searchText:''});
      this.refs[`autocomplete`].focus();
    }
  }

  handleRequestDelete = (key) => {
    this.chipData = this.state.chipData;
    const chipToDelete = this.chipData.map((chip) => chip.key).indexOf(key);
    this.chipData.splice(chipToDelete, 1);
    this.setState({chipData: this.chipData});
  };

  renderChip(data) {
   return (
     <Chip
       key={data.key}
       onRequestDelete={() => this.handleRequestDelete(data.key)}
       style={this.styles.chip}
     >
       {data.label}
     </Chip>
   );
 }

  handleAddKeyDown(e) {
     if(e.key === "Enter"){
       this.addChip(e.target.value);
       e.target.value = "";
     }
  }

  addChip(value){
    var newChip = {
      key: this.state.chipData.length,
      label: value
    }

    this.setState({
      chipData: [...this.state.chipData, newChip]
    });
  }


  render() {
    return (

      <ContentCollapsable
        title = "Tags"
        cardActions = {

          <AutoComplete
            ref={`autocomplete`}
            style={{paddingLeft:10}}
            floatingLabelText="Tilføj nyt tag (kviter ved enter tast)"
            filter={AutoComplete.fuzzyFilter}
            dataSource={knownTags}
            maxSearchResults={5}
            fullWidth={false}
            onKeyDown={ this.handleAddKeyDown}
            onNewRequest={ this.handleNewRequest }
          />


        }
        >
        <div style={this.styles.wrapper}>
          {this.state.chipData.map(this.renderChip, this)}
        </div>
      </ContentCollapsable>
    );
  }

}

export default Kunden_StamData_Tags;
