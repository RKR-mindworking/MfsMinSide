import React from 'react';

import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

import { connect } from 'react-redux';

import { showPopOver } from 'actions';

export class ToolsPopover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: undefined,
    };
  }

  handleRequestClose = () => {
    var { dispatch } = this.props;
    dispatch( showPopOver(false, undefined));
   };

   componentWillReceiveProps(nextProps) {
     this.setState({
       anchorEl: nextProps.opener,
       open: nextProps.showPopOver
     })
   }


  render() {
    return (
      <Popover
        ref="popOver"
        animation={PopoverAnimationVertical}
        animated={false}
        open={this.state.open}
        anchorEl={this.state.anchorEl}
        onRequestClose={this.handleRequestClose}
      >
        <Menu>
          <div style={{textAlign:'center', margin:10}}>
           <Avatar size={120} src='profile.png'/>
          </div>
          <h3 style={{textAlign:'center'}}>Martin Bjeld</h3>
          <Divider />
          <MenuItem style={{cursor:'pointer'}} primaryText="Hjælp" />
          <MenuItem style={{cursor:'pointer'}} primaryText="Min side" />
          <MenuItem style={{cursor:'pointer'}} primaryText="Log ud" />
        </Menu>
      </Popover>
    );
  }
}

export default connect( state => {
  return {
    ...state,
    showPopOver: state.popOver[0],
    opener: state.popOver[1]
  }
})(ToolsPopover);
