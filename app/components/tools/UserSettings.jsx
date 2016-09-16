import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import ActionSettings from 'material-ui/svg-icons/action/settings';

const styles = require('iconStyle').iconStyle();

class UserSettings extends React.Component {
  render() {
    return (
      <IconButton iconStyle={styles.iconBigger} style={styles.comp} tooltip="Indstillinger">
          <ActionSettings />
      </IconButton>
    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatcher which
    available by default */
export default connect()(UserSettings);
