import React, { PropTypes } from 'react'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import MFS_Thumb from 'MFS_Thumb';
import { Link } from 'react-router';
import IconButton from 'material-ui/IconButton';
import ImageNavigateNext from 'material-ui/svg-icons/image/navigate-next';

const tableStyles = require('tableStyles').get();



class MFSTable extends React.Component {

  constructor(props) {
    super(props);
  }



  render () {

    var getTableBody = () => {

      var { cases } = this.props;
      var elements = [];
      for (var key in cases) {
        if (cases.hasOwnProperty(key)) {
          var obj = cases[key];
          elements.push(
            <TableRow key={key}>
              <TableRowColumn style={{textAlign:'left'}}>
                <MFS_Thumb
                  thumbnail={`https://react.mindworking.eu/resources/shops/123/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/thumbnail.jpg`}
                  preview={`https://react.mindworking.eu/resources/shops/123/cases/${obj.CaseNo}/casemedia/images/${obj.PrimaryImage}/presentation.jpg`}
                /></TableRowColumn>
              <TableRowColumn style={{textAlign:'left'}}>{obj.CaseNo}</TableRowColumn>
              <TableRowColumn style={{textAlign:'left'}}>{obj.Address}</TableRowColumn>
              <TableRowColumn style={{textAlign:'left'}}>{obj.ShopNo}</TableRowColumn>
              <TableRowColumn style={{textAlign:'right'}}><Link to="/sager/sagen/"><IconButton><ImageNavigateNext/></IconButton></Link></TableRowColumn>
            </TableRow>
          );
        }
      }
      return elements;
    }

    return (
      <div>
        <Table height={this.props.height}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false} style={tableStyles.tableHeader}>
            <TableRow >
              <TableRowColumn>Preview</TableRowColumn>
              <TableRowColumn>Sagsnummer</TableRowColumn>
              <TableRowColumn>Adresse</TableRowColumn>
              <TableRowColumn>Butik</TableRowColumn>
              <TableRowColumn style={{textAlign:'right'}}>Gå til Sagen</TableRowColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {this.props.children}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export default MFSTable;
