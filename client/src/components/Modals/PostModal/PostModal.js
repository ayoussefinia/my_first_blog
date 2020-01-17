import React from 'react';
import classes from './PostModal.module.css';
var FontAwesome = require('react-fontawesome');

const PostModal = (props) => {
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
        Publish your post?
      </h3>
      <div className={classes.buttonsDiv}>
        <button 
          className={classes.Nevermind}
          onClick={props.clicked}
        >Nevermind
        </button>
        <button 
          className={classes.Continue}
          onClick={props.post}
        >
          Continue
          </button>
      </div>
    </div>
    <div className={classes.darkShadowBackground}></div>
    </div>
  )
}

export default PostModal;