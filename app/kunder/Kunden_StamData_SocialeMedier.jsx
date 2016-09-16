import React from 'react';
import ContentCollapsable from  'ContentCollapsable';
import Form_Input from 'Form_Input';

class Kunden_StamData_SocialeMedier extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      facebook: "https://www.facebook.com/claus.mathorne",
      linkedin: "https://dk.linkedin.com/in/claus-mathorne-7a6b80"
    }
  }

  render() {
    return (
      <ContentCollapsable title="Sociale Medier"
        initiallyExpanded={false}
        fixedContent = {
          <div>
            <Form_Input
              title="Facebook"
              selectedValue= {this.state.facebook}
              handleChange = { value => this.setState({facebook:value})}
              rightAreaContent = {
                <img src="FB-f-Logo__blue_29.png" />
              }
            />

          </div>
        }
        >
        <Form_Input
          title="linkedin"
          selectedValue= {this.state.linkedin}
          handleChange = { value => this.setState({linkedin:value})}
          rightAreaContent = {
            <img src="In-2C-28px-R.png" />
          }
        />
    </ContentCollapsable>
    );
  }
}

Kunden_StamData_SocialeMedier.propTypes = {
  customer: React.PropTypes.object
}

export default Kunden_StamData_SocialeMedier;
