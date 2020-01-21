import React from 'react';
import classes from './DeletePost.module.css';
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
        Are you sure you want to delete?
      </h3>
      <div className={classes.buttonsDiv}>
        <button 
          className={classes.Nevermind}
          onClick={props.clicked}
        >Go Back
        </button>
        <button 
          className={classes.Continue}
          onClick={props.delete}
        >
          Delete
          </button>
      </div>
    </div>
    <div className={classes.darkShadowBackground}></div>
    </div>
  )
}

export default SubmitChanges;