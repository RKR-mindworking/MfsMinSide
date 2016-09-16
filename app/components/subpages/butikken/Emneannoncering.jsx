var React = require('react');
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentMenu2 from 'ContentMenu2';
import ContentLink from 'ContentLink';

export class Emneannoncering extends React.Component {

  render() {

    var menu = <ul>
        <ContentLink toLink="Butikken/Emneannoncering/Indrykninger" label="Indrykninger" />
        <ContentLink toLink="Butikken/Emneannoncering/Annoncebunde" label="Annoncebunde" />
        <ContentLink toLink="Butikken/Emneannoncering/Annoncetoppe" label="Annoncetoppe" />
        <ContentLink toLink="Butikken/Emneannoncering/Spots" label="Spots" />
      </ul>

    return (
      <div>
        <div className="App-area-right-menu ">
          <div className="ContentMenu">
            <ContentMenu2 menu={menu} />
          </div>
        </div>
        <div className="App-area-right-main-content">
          <Paper style={{padding:0}}>
            {this.props.children}
          </Paper>
        </div>
      </div>
    );
  }

}

function mapStateToProps(state) {
  console.log("mapStateToProps", state);
  return {...state};
}

function mapDispatchToProps(dispatch) {
  console.log("matDispatchToProps", dispatch);
  return {dispatch};
}

export default connect(mapStateToProps, mapDispatchToProps)(Emneannoncering);
