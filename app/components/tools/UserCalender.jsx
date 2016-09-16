import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import ActionDateRange from 'material-ui/svg-icons/action/date-range';

const styles = require('iconStyle').iconStyle();

class UserCalender extends React.Component {
  render() {
    return (
      <IconButton iconStyle={styles.iconBigger} style={styles.comp} tooltip="Din kalender">
          <ActionDateRange />
      </IconButton>
    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatcher which
    available by default */
export default connect()(UserCalender);
