import React from 'react';
import { Link } from 'react-router';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import Lightbulb from 'material-ui/svg-icons/action/lightbulb-outline';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import EditorShowChart from 'material-ui/svg-icons/editor/show-chart';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import SocialPerson from 'material-ui/svg-icons/social/person';
import ActionFavorite from 'material-ui/svg-icons/action/favorite-border';
import CommunicationMessage from 'material-ui/svg-icons/communication/message';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

import Popover from 'material-ui/Popover';

import NavigationShownInPopover from 'NavigationShownInPopover';

const styles = require('iconStyle').iconStyle();

export default class NavigationLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showPopover: false,
      anchorEl:undefined
    }

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose(e){
    this.setState({
      showPopover:false,

    });
  }

  handleMouseDown(e) {

    if(this.props.label === "Butikken") {

      this.setState({
        showPopover:true,
        anchorEl: e.currentTarget
      });

    }
  }

  handleMouseUp(e) {
    console.log(e);
    this.setState({
      showPopover:false,

    });
  }

  render() {

    var getIcon = () => {
      var icon;

      switch (this.props.label) {
        case "Til dig":
          icon = <ActionFavorite style={styles.icon}/>;
          break;
        case "Køberkartotek":
          icon = <ContentPaste style={styles.icon} />;
          break;
        case "Sagen":
          icon = <ActionGavel style={styles.icon} />;
          break;
        case "Statestik":
          icon = <EditorShowChart style={styles.icon} />;
          break;
        case "Min profil":
          icon = <SocialPerson style={styles.icon} />;
          break;
        case "Meddelelser":
          icon = <CommunicationMessage style={styles.icon} />;
          break;

      }

      return icon;
    }



    var renderMenu = () => {

      if(!this.props.showLabel){
        return <div style={{display: 'flex', alignItems:'center'}} onMouseDown={ this.handleMouseDown }
          onMouseUp={ this.handleMouseUp }
        >{getIcon()}</div>
      }

      if(this.props.isLeaf) {
        return <span>{this.props.label}</span>
      }else {
        return <div style={{display: 'flex', alignItems:'center'}}>{getIcon()} <span style={{paddingLeft:10}}>{this.props.label}</span></div>
      }

    }

    return (
      <div>
        <Link to={this.props.toLink} className="navigation-link" activeClassName="navigation-link-active">
          {renderMenu()}
        </Link>

        <Popover
            open={this.state.showPopover}
            anchorEl = {this.state.anchorEl}
            onRequestClose={this.handleRequestClose}
            style={{marginLeft:-13, marginTop:-42, backgroundColor:'#303030'}}
            zDepth={3}
          >
          <div style={{marginLeft:0, marginTop:15, width:250, height: 480}}>
              <NavigationShownInPopover />
          </div>
        </Popover>
      </div>
    );
  }
}
