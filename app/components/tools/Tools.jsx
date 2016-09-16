import React from 'react';
import { connect } from 'react-redux';

import UserBasket from 'UserBasket';
import UserProfile from 'UserProfile';
import UserSettings from 'UserSettings';
import UserCalender from 'UserCalender';
import UserNotifications from 'UserNotifications';
import UserPhone from 'UserPhone';


class Tools extends React.Component {
  render() {
    return (
      <div style={{display:'flex', flexDirection:'row', paddingRight: 20}}>
        <div style={{width:1, height: 32, backgroundColor: '#444444', marginLeft:5, marginRight:5}} />
        <UserProfile />
      </div>
    );
  }
}

/*  Redux - Thunk - Connected: No extra props needed, only dispatcher which
    available by default */
export default connect()(Tools);
