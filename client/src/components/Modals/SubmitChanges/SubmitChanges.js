import React from 'react';
import classes from './SubmitChanges.module.css';
var FontAwesome = require('react-fontawesome');

const SubmitChanges = (props) => {
  return (
    <div className={classes.modalContainerDiv}>
    <div className={classes.modalDiv}>
    <FontAwesome
          className={classes.book}
          name="book"
          size="3x"
          // spin

      />
      <h3>
        Submit Changes?
      </h3>
      <div className={classes.buttonsDiv}>
        <button 
          className={classes.Nevermind}
          onClick={props.clicked}
        >Go Back
        </button>
        <button 
          className={classes.Continue}
          onClick={props.post}
        >
          Publish 
          </button>
      </div>
    </div>
    <div className={classes.darkShadowBackground}></div>
    </div>
  )
}

export default SubmitChanges;