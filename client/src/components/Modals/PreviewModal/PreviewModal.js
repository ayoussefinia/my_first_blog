import React from 'react';
import classes from './PreviewModal.module.css';
var FontAwesome = require('react-fontawesome');

const PreviewModal = (props) => {

return(
  <div className={classes.modalContainer}>
    <div className={classes.modalDiv}>

      <button className={classes.backButtonContainer}
              onClick={props.clicked}
      >

      <FontAwesome
              className={classes.backButton}
              name="backward"
              size="2x"
      />
      </button>
      <div className={classes.previewHeaderDiv}>
        <h4>
          Preview
        </h4>
        
      </div>
      {props.children}
      <button 
        className={classes.backButtonContainer}
        onClick={props.clicked}
      >
      <FontAwesome
              className={classes.backButton}
              name="backward"
              size="2x"
      />
      </button>
     </div>
     
     <div 
      className={classes.shadedBackground}
      onClick={props.clicked}
     ></div>
  </div>
)




}

export default PreviewModal; 