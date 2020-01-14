import React from 'react';
import classes from './PreviewModal.module.css';
var FontAwesome = require('react-fontawesome');

const PreviewModal = (props) => {

return(
  <div className={classes.modalContainer}>
    <div className={classes.modalDiv}>
      <button className={classes.backButtonContainer}>
      <FontAwesome
              className={classes.backButton}
              name="backward"
              size="2x"
      />
      </button>
    
      {props.children}
     </div>
     
     <div className={classes.shadedBackground}></div>
  </div>
)




}

export default PreviewModal; 