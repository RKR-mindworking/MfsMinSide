import React from 'react';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import InfoItem from 'InfoItem';

const styles = {
  infoRow: {
    display: 'flex',
  },
  info: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop:13,
    flex: 1,
    justifyContent: 'space-between',
  },
  map: {
    backgroundColor: '#EEE',
    padding: 2,
    width: 161,
  },
  preview: {
    backgroundColor: '#EEE',
    padding: 2,
    marginLeft:1,
    width: 161,
  }
}

const Kunden_InfoBox = ({customer}) => {
  return(
    <Paper style={{marginBottom:20}}>
      <div style={{display: "flex", height: 119}}>
        <div style={{padding:10, width:100}}>
          <Avatar size={100} src='profile.png'/>
        </div>
        <div style={styles.info}>
          <div style={styles.infoRow}>
            <InfoItem
              title='Navn'
              textLines={[`${customer.firstName}`,customer.address,`${customer.postalNumber} ${customer.city}`]}/>
            <InfoItem
              title='Rolle'
              textLines={[customer.role]}/>
            <InfoItem
              title='Kontaktoplysninger'
              textLines={['Tlf: ' + customer.phone, <span>E-mail: <a href={`mailto:${customer.email}`}>{customer.email}</a></span>]}/>
          </div>
        </div>

        <div style={styles.map}>
          <img src="map-thumb.jpg" />
        </div>
        <div style={styles.preview}>
          <img src="thumb-larger.jpg" />
        </div>
      </div>
    </Paper>
  );
}

export default Kunden_InfoBox;
