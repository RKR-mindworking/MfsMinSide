import React from 'react';
import { connect } from 'react-redux';

import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

import { toggleMenu } from 'actions';

class ToggleMenu extends React.Component {
  render() {

    const { dispatch } = this.props;

    return (
      <IconButton iconStyle={{fill:'#9c9c9c'}} onTouchTap={ () => dispatch(toggleMenu()) }>
          <NavigationMenu />
      </IconButton>
    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatch which
    available by default */
export default connect()(ToggleMenu);
