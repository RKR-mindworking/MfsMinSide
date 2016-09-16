import React from 'react';
import TextField from 'material-ui/TextField';

class Form_Input extends React.Component {

  constructor(props) {
    super(props);

    this.styles = {
      div: {
        display: 'flex',
        flex:1,
        alignItems: 'center',
        paddingBottom:10,
      },
      title: {
        width:200
      },
      form: {
        flex:1
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {

    var renderRightArea = null;

    if( this.props.rightAreaContent ) {
      renderRightArea = <a style={{marginLeft:10, marginBottom:7, flex:1,flexDirection:'column',alignSelf:'flex-end'}} href={this.props.selectedValue} target="_blank">
      <div


        >
        {this.props.rightAreaContent}
      </div></a>
    }


    return (
      <div style={{display:'flex'}}>
        <TextField
          ref={`nametextfield`}
          floatingLabelText={this.props.title}
          fullWidth
          onChange={ e => this.props.handleChange(e.target.value) }
          value={ this.props.selectedValue }
          type={this.props.type}
          />
        { renderRightArea }
      </div>


    );
  }
}

Form_Input.defaultProps = {
  type: "text"
}

Form_Input.propTypes = {
  rightAreaContent: React.PropTypes.element,
  type: React.PropTypes.string
}


export default Form_Input;
