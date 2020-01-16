import React from 'react';
import classes from './ActivePost.module.css';
import { withRouter } from 'react-router-dom'
import ActivePostText from "./ActivePostText/ActivePostText";
import { connect } from 'react-redux';
import Moment from 'react-moment';
var FontAwesome = require('react-fontawesome');



const ActivePost = (props) => {
  const imageStyles={
    backgroundImage: 'url("' + props.makePost.img + '")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }

  const date = new Date(Date.now()).toString();

  return(
    <div className={classes.activePostCard}>
    <div className={classes.titleStyles}><h4 className={classes.headerStyles}>{props.makePost.title}</h4></div>
    <div className={classes.articleTitleFooter}>
    <div className={classes.author}> by- {props.auth.user.name}</div>
    <div className={classes.publishedDate}>
        Published On: 

        <Moment format="D MMM YYYY" withTitle>
                {date}
        </Moment>
    </div>
    </div>
    <div style={imageStyles}>
    </div>
    <div className={classes.imageFooter}>
    <div className={classes.imageFotterLeft}>
    <FontAwesome
        className={classes.socialMediaLink}
        name="thumbs-up"
        size="2x"
        // spin
        style={{ color: 'gray' }}
    /> <span className={classes.likes}>{props.likes}</span>
    <FontAwesome
        className={classes.socialMediaLink}
        name="thumbs-down"
        size="2x"
        // spin
        style={{ color: 'gray' }}
    />  <span className={classes.dislikes}>{props.dislikes}</span>
    </div>
    <div className={classes.imageFotterRight}>
    <a href="" className={classes.facebookLink}>
    <FontAwesome
        className={classes.facebookShareLink}
        name="facebook"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    <a href="" className={classes.twitterLink}>
    <FontAwesome
       
        name="twitter"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    <a href="" className={classes.linkedInLink}>
    <FontAwesome
       
        name="linkedin"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    </div>
    </div>
    <div className={classes.postText}>
        {props.makePost.bodyArr.map((el, index)=> {
            if(el.type === 'textArea') {
                return(
                    <div className={classes.TextAreaDiv}>
                        <p className={classes.TextAreaParagraph}>
                        {props.makePost.bodyArr[index].value}
                        </p>
                        <br/>
                        <br/>
                    </div>
                )
            } else if (el.type  === 'header') {
                return(
                    <div className={classes.headerDiv}>
                        <h4 className={classes.header}>
                            {props.makePost.bodyArr[index].value}
                        </h4>
                        <br/>
                        <br/>
                    </div>
                )
            } else if (el.type === 'image') {
                return(
                    <div className={classes.imageDiv}>
                         <img src={props.makePost.bodyArr[index].value} alt="" className={classes.image}/>
                         <br/>
                         <br/>
                    </div>
                )
            }

        })}
    </div>
  
    </div>
  )
}


const mapStateToProps = state => ({
    makePost: state.makePost,
    auth: state.auth
  });
  

export default connect( mapStateToProps, null )(withRouter(ActivePost));