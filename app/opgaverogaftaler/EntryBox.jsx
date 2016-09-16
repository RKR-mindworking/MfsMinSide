import React, { PropTypes } from 'react'
import Badge from 'material-ui/Badge';
import Paper from 'material-ui/Paper';

const EntryBox = (props) => {


  var renderWarning = null;

  if(props.overdueCount > 0) {
    renderWarning = <Paper className="fading" zDepth={0} circle style={{backgroundColor: '#CF000F', width:20, height:20, float:'right', marginTop:-62, marginRight:3}}><div style={{width:'100%', fontSize:10, color:'#FFF', textAlign:'center'}}>{props.overdueCount}</div></Paper>
  }

  return (

    <div className="entrybox-item">
      <div style={{fontSize:11, display: 'flex', alignItems:'center', justifyContent:"space-around" ,border: '1px solid ' + props.entryColor, height:30, marginRight:10, paddingLeft:10, paddingRight:10}}>
        {props.entryName}
      </div>
      <div style={{display: 'flex', justifyContent:"space-around",color:"#fff", height:21, marginRight:10, backgroundColor: props.entryColor}}>
        <span style={{fontSize:11}}>{props.entryCount}</span>
      </div>
      {renderWarning}
    </div>
  )

}


EntryBox.defaultProps = {
  entryColor: "#ff0000",
  entryWidth: 30,
  overdueCount: 0
};


export default EntryBox
