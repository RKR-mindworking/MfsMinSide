import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';

import { showPopOver } from 'actions';

const styles = require('iconStyle').iconStyle();

class UserProfile extends React.Component {
  render() {
    var { dispatch } = this.props;

    return (
      <IconButton ref="userProfileBtn" iconStyle={styles.iconBiggest} style={styles.comp} onClick={ (e) => {
          dispatch(showPopOver(true, e.currentTarget))}
         } >
        <ActionAccountCircle />
      </IconButton>
    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatcher which
    available by default */
export default connect()(UserProfile);
