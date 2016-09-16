import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import CommunicationPhone from 'material-ui/svg-icons/communication/phone';
import CommunicationCallMade from 'material-ui/svg-icons/communication/call';
import CommunicationCallReceived from 'material-ui/svg-icons/communication/call';

import { showPopOver } from 'actions';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';

import Divider from 'material-ui/Divider';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const styles = require('iconStyle').iconStyle();

class UserPhone extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: undefined
    }

    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleTouchTap(event){
   // This prevents ghost click.
     event.preventDefault();

     this.setState({
       open: true,
       anchorEl: event.currentTarget,
     });
   };

 handleRequestClose(){
   this.setState({
     open: false,
   });
 };


  render() {
    var { dispatch } = this.props;

    return (
      <div>
        <IconButton ref="userProfileBtn" iconStyle={styles.iconBiggest} style={styles.comp} onTouchTap={this.handleTouchTap}>
          <CommunicationPhone />
        </IconButton>

        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
        <Menu width={256}>
          <MenuItem style={{color:'#CF000F'}} primaryText="Jeppe Rasmussen, 21710187" leftIcon={<ActionAccountCircle />} />
          <MenuItem style={{color:'#CF000F'}} primaryText="Rikke Vidberg, 90951620" leftIcon={<ActionAccountCircle />} />
          <MenuItem primaryText="Henrik Henriksen, 55376891" leftIcon={<ActionAccountCircle />} rightIcon={<CommunicationCallReceived />}/>
          <MenuItem primaryText="Hans Hansen, 21548795" leftIcon={<ActionAccountCircle />} />
          <MenuItem primaryText="Louise Lorentzen, 22468744" leftIcon={<ActionAccountCircle />} rightIcon={<CommunicationCallReceived />}/>
        </Menu>
        </Popover>
      </div>

    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatcher which
    available by default */
export default connect()(UserPhone);
