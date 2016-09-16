import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

import {Link} from 'react-router';

const items = [
  <MenuItem key={1} value={1} primaryText="Berlinske Tidende" />,
  <MenuItem key={2} value={2} primaryText="Boligmagasinet Estate" />,
  <MenuItem key={3} value={3} primaryText="MW_Daily" />,
  <MenuItem key={4} value={4} primaryText="Villabyerne" />,
];

const styles = {
  block: {

  },
  checkbox: {
    marginBottom: 5,

  },
  bg:{
    backgroundColor:'#fafafa'
  }
};

export default class ContextToolbar extends React.Component {

  state = {
    open:false,
    node:'',
    leaf:'',
    medieValue: 1,
    showIndrykninger: false
  };

  update(node, leaf) {
    this.setState({
      node:node,
      leaf:leaf
    })
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event, index, value) => {
    this.setState({medieValue:value});
  };

  getShowIndrykninger() {
    if(this.state.leaf === "Emneannoncering"){
      return <div>
        <span style={{paddingRight:10}}><Link className="text-link" activeClassName= "text-link-active2" to={this.state.node + '/' + this.state.leaf + '/Indrykninger'}>Indrykninger /</Link></span>
        <span style={{paddingRight:10}}><Link className="text-link" activeClassName= "text-link-active2" to="Annoncebunde">Annoncebunde /</Link></span>
        <span style={{paddingRight:10}}><Link className="text-link" activeClassName= "text-link-active2" to="Annoncetoppe">Annoncetoppe /</Link></span>
        <span style={{paddingRight:10}}><Link className="text-link" activeClassName= "text-link-active2" to="Spots">Spots /</Link></span>
        <span style={{paddingRight:10}}><Link className="text-link" activeClassName= "text-link-active2" to="Boligmagasinet">Boligmagasinet /</Link></span>

        </div>

    }
    else {
      return <div><span></span></div>
    }


  }

  getButton() {
    if(this.state.leaf === "Emneannoncering"){
        return <RaisedButton label="Ny indrykning" primary={true} onTouchTap={this.handleOpen}/>
    } else {
      return <div></div>
    }


  }

  getShowBreadcrumb() {

    if(this.state.node !== "" && this.state.leaf === ""){
      return<span>
       <Link className="text-link" activeClassName= "text-link-active" to={this.state.node}>{this.state.node} /</Link>
       </span>
    } else if (this.state.node !=="" && this.state.leaf !== "") {

      return<span>
           <Link className="text-link" activeClassName= "text-link-active" to={this.state.node}>{this.state.node} /</Link>
           <Link className="text-link" activeClassName= "text-link-active" to={this.state.node + "/" + this.state.leaf}> {this.state.leaf}</Link>
         </span>
       } else {
         return <div></div>
       }








  }


  render() {

    const actions = [
     <FlatButton
       label="Ok"
       onTouchTap={this.handleClose}
     />,
    ];

    return(
    <div className="context-toolbar">
      <div className="context-toolbar-content">

        {this.getShowBreadcrumb()}

        <br/>

        {this.getShowIndrykninger()}


      </div>

      <div className="width-spacer" />

      <div className="context-toolbar-content-right">
        {this.getButton()}

      </div>

      <Dialog bodyStyle={styles.bg} titleStyle={styles.bg} actionsContainerStyle={styles.bg} title="Ny indrykning" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose} >
        <Paper>
        <div className="flex-wrapper">
          <div className="app-content-children">
            <SelectField floatingLabelText="Vælg medie" value={this.state.medieValue}
              onChange={this.handleChange}
              >
            {items}
            </SelectField>
            <DatePicker autoOk={true} hintText="Indrykningsdato" floatingLabelText="Vælg indrykningsdato"/>
            <DatePicker autoOk={true} hintText="Slutdato" floatingLabelText="Vælg slutdato"/>
          </div>
          <div className="app-content-children">
            <span>Gentages for hver </span><TextField inputStyle={{textAlign:'center'}} style={{width:30, paddingBottom:1}} /> <span> uge(r)</span>
              <div style={styles.block}>
                <Checkbox
                  label="Mandag"
                  defaultChecked={false}
                  style={styles.checkbox}
                />
                <Checkbox
                  label="Tirsdag"
                  defaultChecked={false}
                  style={styles.checkbox}
                />
                <Checkbox
                  label="Onsdag"
                  defaultChecked={false}
                  style={styles.checkbox}
                />
                <Checkbox
                  label="Torsdag"
                  defaultChecked={false}
                  style={styles.checkbox}
                />
                <Checkbox
                  label="Fredag"
                  defaultChecked={false}
                  style={styles.checkbox}
                />
                <Checkbox
                  label="Lørdag"
                  defaultChecked={false}
                  style={styles.checkbox}
                />
                <Checkbox
                  label="Søndag"
                  defaultChecked={false}
                  style={styles.checkbox}
                />


              </div>
          </div>
        </div>
      </Paper>
      </Dialog>

    </div>
  )};
}
