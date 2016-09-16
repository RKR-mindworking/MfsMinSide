import React, { PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import FileCloudUpload from 'material-ui/svg-icons/file/file-upload';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ContentSend from 'material-ui/svg-icons/content/send';
import Checkbox from 'material-ui/Checkbox';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import {Menu, MenuItem} from 'material-ui/Menu';
import DropDownMenu from 'material-ui/DropDownMenu';
import Popover from 'material-ui/Popover/Popover';

import { connect } from 'react-redux';

const styles = {
  div: {
    marginTop: 20,
    marginRight: 20,
    width: "100%",

  }
}


const tableStyles = require('tableStyles').get();
const styles2 = require('iconStyle').iconStyle();

class Boligfakta_Dokumenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: undefined,
    };

    this.popupCenter = this.popupCenter.bind(this);
  }

  handleTouchTap = (event) => {
      // This prevents ghost click.
      event.preventDefault();
      this.setState({
        open: true,
        anchorEl: event.currentTarget,
      });
    };

    handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
  componentDidMount() {

  }

  handleOnCellClick = (rowNumber,columnId) => {

    var { showSag } = this.props;
    var str = 'https://react.mindworking.eu/usercontrols/doceditor/viewer.html?shopno=' + showSag.caseObj.ShopNo + '&caseno=' + showSag.caseObj.CaseNo + '&Doc=Formidlingsaftale_2_5';

    this.popupCenter(str, "Editor", window.innerWidth-50, window.innerHeight-50);
  }


  popupCenter(url, title, w, h) {
      // Fixes dual-screen position                         Most browsers      Firefox
      var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
      var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

      var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
      var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

      var left = ((width / 2) - (w / 2)) + dualScreenLeft;
      var top = ((height / 2) - (h / 2)) + dualScreenTop;
      var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);




      // Puts focus on the newWindow
      if (window.focus) {
          newWindow.focus();
      }
  }



  render () {
    return (
      <div>
        <Paper style={{padding:10}}>

          <ul className="hMenu" style={{display:'flex', marginLeft:8, paddingLeft:0}}>
            <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><ContentSend style={{width:20, height:20, marginRight:10}}/> Send til digial underskrift</span></li>
            <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><ContentSend style={{width:20, height:20, marginRight:10}}/> Send til e-bolighandel</span></li>
            <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><ContentSend style={{width:20, height:20, marginRight:10}}/> Send Dokumenter</span></li>
            <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><ContentCopy style={{width:20, height:20, marginRight:10}}/> Hent eksterne dokumenter</span></li>
            <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}} onClick={this.handleTouchTap}><ActionSettings style={{width:20, height:20, marginRight:10}}/> Opret Dokument</span></li>
          </ul>


       </Paper>

        <div style={styles.div} >
          <Card initiallyExpanded={true} >

            <CardHeader
                style={{backgroundColor:'#F5F5F5'}}
                 title="Ejendomsmæglerens hoveddokumenter"
                 actAsExpander={true}
                 showExpandableButton={true}/>

               <CardText expandable={true} style={{marginTop:-15, marginLeft:-16, marginRight:-16}} >
                <Divider />
                <Table fixedHeader onCellClick={ this.handleOnCellClick }>
                  <TableHeader displaySelectAll={true} adjustForCheckbox={true} style={tableStyles.tableHeader}>
                    <TableRow selectable={true}>
                      <TableRowColumn>Navn</TableRowColumn>
                      <TableRowColumn>Status</TableRowColumn>
                      <TableRowColumn>Sidst ændret</TableRowColumn>
                      <TableRowColumn>Vis på hjemmeside</TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}>Redigér</TableRowColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={true} showRowHover={true}>
                    <TableRow style={{cursor:'pointer'}}>
                      <TableRowColumn>Salgsopstilling</TableRowColumn>
                      <TableRowColumn>Klar</TableRowColumn>
                      <TableRowColumn>27-04-2016 06:27</TableRowColumn>
                      <TableRowColumn>{<Checkbox />}</TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}><EditorModeEdit /></TableRowColumn>
                    </TableRow>
                    <TableRow style={{cursor:'pointer'}}>
                      <TableRowColumn>Formidlingsaftale - Budrunde</TableRowColumn>
                      <TableRowColumn>Klar</TableRowColumn>
                      <TableRowColumn>28-04-2016 18:07</TableRowColumn>
                      <TableRowColumn>{<Checkbox />}</TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}><EditorModeEdit /></TableRowColumn>
                    </TableRow>
                    <TableRow style={{cursor:'pointer'}}>
                      <TableRowColumn><span style={{color:'#f43125'}}>Formidlingsaftale</span></TableRowColumn>
                      <TableRowColumn>Mangler data</TableRowColumn>
                      <TableRowColumn>23-04-2016 11:07</TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}><EditorModeEdit /></TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
                <Divider />
             </CardText>

            <CardActions>
              <ul className="hMenu" style={{display:'flex', marginLeft:8, paddingLeft:0}}>
                <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><FileCloudUpload style={{width:20, height:20, marginRight:10}}/> Upload Dokumenter</span></li>
              </ul>

            </CardActions>

          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false} >

            <CardHeader
                style={{backgroundColor:'#F5F5F5'}}
                  title="Købsaftale for Henrik Jensen"
                 actAsExpander={true}
                 showExpandableButton={true}/>

           <CardText expandable={true} style={{marginTop:-15, marginLeft:-16, marginRight:-16}} >
                <Divider />
                <Table fixedHeader onCellClick={ this.handleOnCellClick }>
                  <TableHeader displaySelectAll={true} adjustForCheckbox={true} style={tableStyles.tableHeader}>
                    <TableRow selectable={true}>
                      <TableRowColumn>Navn</TableRowColumn>
                      <TableRowColumn>Status</TableRowColumn>
                      <TableRowColumn>Sidst ændret</TableRowColumn>
                      <TableRowColumn>Vis på hjemmeside</TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}>Redigér</TableRowColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={true} showRowHover={true}>
                    <TableRow>
                      <TableRowColumn>Standardvilkår for købsaftale</TableRowColumn>
                      <TableRowColumn>Klar</TableRowColumn>
                      <TableRowColumn>27-04-2016 06:27</TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}></TableRowColumn>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Salgsprovenu</TableRowColumn>
                      <TableRowColumn>Klar</TableRowColumn>
                      <TableRowColumn>23-04-2016 16:57</TableRowColumn>
                      <TableRowColumn></TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}></TableRowColumn>
                    </TableRow>
                  </TableBody>
                </Table>
                <Divider />
             </CardText>

            <CardActions>

              <ul className="hMenu" style={{display:'flex', marginLeft:8, paddingLeft:0}}>
                <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><FileCloudUpload style={{width:20, height:20, marginRight:10}}/> Upload Dokumenter</span></li>
                <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><EditorModeEdit style={{width:20, height:20, marginRight:10}}/> Redigér købsaftalen</span></li>
                <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><ActionNoteAdd style={{width:20, height:20, marginRight:10}}/> Tilføj dokument til købsaftale</span></li>
                <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><ContentCopy style={{width:20, height:20, marginRight:10}}/> Kopiér</span></li>
                <li><span style={{display:'flex', alignItems:'center', cursor:'pointer', color:'#f43125'}}><ActionDelete style={{width:20, height:20, marginRight:10}}/> Slet købsaftalen</span></li>
              </ul>

            </CardActions>

          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false} >

            <CardHeader
              style={{backgroundColor:'#F5F5F5'}}
                 title="Økonomi og forbrugsdokumenter"
                 actAsExpander={true}
                 showExpandableButton={true}/>

              <CardText expandable={true} style={{marginTop:-15, marginLeft:-16, marginRight:-16}} >
                <Divider />
                <Table fixedHeader onCellClick={ this.handleOnCellClick }>
                  <TableHeader displaySelectAll={true} adjustForCheckbox={true} style={tableStyles.tableHeader}>
                    <TableRow selectable={true}>
                      <TableRowColumn>Navn</TableRowColumn>
                      <TableRowColumn>Status</TableRowColumn>
                      <TableRowColumn>Sidst ændret</TableRowColumn>
                      <TableRowColumn>Vis på hjemmeside</TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}>Redigér</TableRowColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={true} showRowHover={true}>

                  </TableBody>
                </Table>
                <Divider />
             </CardText>

            <CardActions>
              <ul className="hMenu" style={{display:'flex', marginLeft:8, paddingLeft:0}}>
                <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><FileCloudUpload style={{width:20, height:20, marginRight:10}}/> Upload Dokumenter</span></li>

              </ul>

            </CardActions>

          </Card>
        </div>

        <div style={styles.div}>
          <Card initiallyExpanded={false} >

            <CardHeader
              style={{backgroundColor:'#F5F5F5'}}
                 title="Bolig dokumenter"
                 actAsExpander={true}
                 showExpandableButton={true}/>

           <CardText expandable={true} style={{marginTop:-15, marginLeft:-16, marginRight:-16}} >
                <Divider />
                <Table fixedHeader onCellClick={ this.handleOnCellClick }>
                  <TableHeader displaySelectAll={true} adjustForCheckbox={true} style={tableStyles.tableHeader}>
                    <TableRow selectable={true}>
                      <TableRowColumn>Navn</TableRowColumn>
                      <TableRowColumn>Status</TableRowColumn>
                      <TableRowColumn>Sidst ændret</TableRowColumn>
                      <TableRowColumn>Vis på hjemmeside</TableRowColumn>
                      <TableRowColumn style={{textAlign:'right'}}>Redigér</TableRowColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={true} showRowHover={true}>

                  </TableBody>
                </Table>
                <Divider />
             </CardText>

            <CardActions>
              <ul className="hMenu" style={{display:'flex', marginLeft:8, paddingLeft:0}}>
                <li><span style={{display:'flex', alignItems:'center', cursor:'pointer'}}><FileCloudUpload style={{width:20, height:20, marginRight:10}}/> Upload Dokumenter</span></li>

              </ul>

            </CardActions>

          </Card>
        </div>



        <Popover
           open={this.state.open}
           anchorEl={this.state.anchorEl}
           onRequestClose={this.handleRequestClose}
         >
         <Menu>
           <MenuItem primaryText="Formidlingsaftale - ændring af vilkår" />
           <MenuItem primaryText="Formidlingsaftale - budrunde" />
           <MenuItem primaryText="Formidlingsaftale - forlængelse" />
           <MenuItem primaryText="Transporterklæring ejer & ejerprojekt" />
           <MenuItem primaryText="Fravalg af huseftersynsordningen" />
           <MenuItem primaryText="Tilbud om betaling af halv ejerskifteforsikringspræmie" />
           <Divider />
           <MenuItem primaryText="Grundejerforeningsforespørgsel" />
           <MenuItem primaryText="Vejlaug forespørgsel" />
           <MenuItem primaryText="Ejerlejlighedsskema" />
           <MenuItem primaryText="Budjournal" />
           <Divider />
           <MenuItem primaryText="Købsaftale" />
         </Menu>
       </Popover>


      </div>
    )
  }
}


export default connect( state => {
  return {
    sagsInfo: state.sagsInfo,
    showSag: state.showSag
  }
})(Boligfakta_Dokumenter);
