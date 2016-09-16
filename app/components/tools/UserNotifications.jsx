import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import SocialNotifications from 'material-ui/svg-icons/social/notifications';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import CommunicationCallReceived from 'material-ui/svg-icons/communication/call';

const styles = require('iconStyle').iconStyle();




const customContentStyle = {
  width: 1100,
  maxWidth: 'none',
};

class UserNotifications extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      customer: {
        image:"",
        firstName:"Henrik Hjul",
        address:"Østre Mosevej 5829",
        postalNumber:"9440",
        city:"Aabybro",
        phone:"21633177",
        email:"hf@hfenger.dk",
        role:"Sælger/Køber"
      }
    }

    this.fakePopup = this.fakePopup.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }


 handleClose(){
   this.setState({open: false});
 };

  fakePopup(){
this.setState({open: true});

  }

  render() {


    const actions = [
          <FlatButton
            label="Accepter"
            secondary
            onTouchTap={this.handleClose}
          />,
          <FlatButton
            label="Afvis"

            onTouchTap={this.handleClose}
          />,
        ];

    return (

      <div>
      <IconButton iconStyle={styles.iconBigger} style={styles.comp} tooltip="Notifikationer"
        onClick={ () => {
          setTimeout(this.fakePopup, 5000)
        }}
        >
          <SocialNotifications />
      </IconButton>


      <Dialog
          title="Indegående kald"
          contentStyle={customContentStyle}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          actions={actions}
        >


        </Dialog>


      </div>
    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatcher which
    available by default */
export default connect()(UserNotifications);
