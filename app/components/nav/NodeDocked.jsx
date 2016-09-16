import React from 'react';
import Lightbulb from 'material-ui/svg-icons/action/lightbulb-outline';
import ContentPaste from 'material-ui/svg-icons/content/content-paste';
import ActionGavel from 'material-ui/svg-icons/action/gavel';
import SocialPeople from 'material-ui/svg-icons/social/people';
import ActionStore from 'material-ui/svg-icons/action/store';
import CommunicationBusiness from 'material-ui/svg-icons/communication/business';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import {Popover, PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';

var styles = require('iconStyle').iconStyle();

var {Link} = require('react-router');


export default class NodeDocked extends React.Component {









    render() {


      var renderMenu = () => {

        return <ul className="nodes">
          <li><NavigationLink key={0} isSub={false} isLeaf={false} label="Kampagner" toLink="/Kampagner" /></li>
          <li><NavigationLink key={1} isSub={false} isLeaf={false} label="Opgaver/Aftaler" toLink="/Opgaver/Aftaler" /></li>
          <li><NavigationLink key={2} isSub={false} isLeaf={false} label="Sagen" toLink="/Sagen" /></li>
          <li><NavigationLink key={3} isSub={false} isLeaf={false} label="Kunder" toLink="/Kunder" /></li>
          <li><NavigationLink key={4} isSub={true} isLeaf={false} label="Butikken" toLink="/Butikken" /></li>
          <li><NavigationLink key={5} isSub={false} isLeaf={false} label="Kæden" toLink="/Kæden" /></li>
          <li><NavigationLink key={6} isSub={false} isLeaf={false} label="Markedspladsen" toLink="/Markedspladsen" /></li>
        </ul>
      }




        return (
            <div>












            <Popover
                      open={this.state.open}
                      anchorEl = {this.state.anchorEl}
                      onRequestClose={this.handleRequestClose}
                      anchorOrigin = {this.state.anchorOrigin}
                      targetOrigin = {this.state.targetOrigin}
                      style={{margin:-15, backgroundColor:'#303030'}}
                      zDepth={3}
                    >
                    <div style={{margin:15, width:200, height: 300}}>

                      </div>


                    </Popover>
          </div>
            // <Link key={this.props.key} className="infinity-menu-node-container" activeClassName="infinity-menu-node-container-open" to={`/${this.props.name}`}>{this.getIcon()} <span style={{paddingLeft:10}}>{this.props.name}</span></Link>
        );
    }
}
