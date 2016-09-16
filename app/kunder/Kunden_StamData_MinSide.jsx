import React from 'react';
import ContentCollapsable from  'ContentCollapsable';
import Form_Input from 'Form_Input';
import RaisedButton from 'material-ui/RaisedButton';

class Kunden_StamData_MinSide extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <ContentCollapsable title="Min Side"

        cardActions = {

          <div style={{display:'flex', padding:5}}>
            <RaisedButton label="Gå til Min Side" secondary />
            <RaisedButton label="Send Til" secondary style={{marginLeft:10}} />
          </div>
        }

        >

        <Form_Input
          title="Brugernavn"
          selectedValue={this.state.username}
          handleChange = { value => this.setState({username:value})}
        />

        <Form_Input
          title="Password"
          type="password"
          selectedValue={this.state.password}
          handleChange = { value => this.setState({password:value})}
        />

      </ContentCollapsable>
    );
  }
}

Kunden_StamData_MinSide.propTypes = {
  customer: React.PropTypes.object
}

export default Kunden_StamData_MinSide;
