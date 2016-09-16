import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

const styles = require('iconStyle').iconStyle();

class UserBasket extends React.Component {
  render() {
    return (
      <IconButton iconStyle={styles.iconBigger} style={styles.comp} tooltip="Din indkøbskurv">
          <ActionShoppingCart />
      </IconButton>
    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatcher which
    available by default */
export default connect()(UserBasket);
