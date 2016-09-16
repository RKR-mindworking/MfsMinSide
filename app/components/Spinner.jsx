import React from 'react'

const styles = {
  outer: {
    display:'flex',
    justifyContent:'center',
    height:'100vh',
    backgroundColor:'#FAFAFA',

  },
  loader : {
    alignSelf:'center',
  }
}

const Spinner = () => {
  return (
    <div style={styles.outer}>
      <div style={styles.loader}>
        <div className='loader' />
      </div>
    </div>
  )
}

export default Spinner
