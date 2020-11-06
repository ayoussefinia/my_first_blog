import React from 'react';
import classes from './PreviewPost.module.css';
import { withRouter } from 'react-router-dom'
import ActivePostText from "./ActivePostText/ActivePostText";
import { connect } from 'react-redux';
import Moment from 'react-moment';
var FontAwesome = require('react-fontawesome');


// this is the component that shows the active main article on the landing page as well as the preview of a post on the MakeAPost page
const PreviewPost = (props) => {

  const date = new Date(Date.now()).toString();

  return(
    <div className={classes.activePostCard}>
    <div className={classes.titleStyles}><h4 className={classes.headerStyles}>{props.title}</h4></div>
    <div className={classes.articleTitleFooter}>
    <div className={classes.author}> by- {props.author}</div>
    <div className={classes.publishedDate}>
       {props.mode === 'make' ? 'Published On:' : 'Last Edited:' } 
        <Moment 
            format="D MMM YYYY" 
            withTitle
            className={classes.previewDate}
        >
                {date}
        </Moment>
    </div>
    </div>
    <div style={{
    backgroundImage: 'url("' + props.image + '")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: window.innerWidth<660 ? 
            window.innerWidth*(2/3) : 
            window.innerWidth*(.6)*(2/3)
  }}>
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
    <div href="" className={classes.facebookLink}>
    <FontAwesome
        className={classes.facebookShareLink}
        name="facebook"
        style={{ color: 'white' }}
    /> 
    </div>
    <div href="" className={classes.twitterLink}>
    <FontAwesome       
        name="twitter"
        style={{ color: 'white' }}
    /> 
    </div>
    <div href="" className={classes.linkedInLink}>
    <FontAwesome
        name="linkedin"
        style={{ color: 'white' }}
    /> 
    </div>
    </div>
    </div>
    <div className={classes.postText}>
        {props.body.map((el, index)=> {
            if(el.type === 'textArea') {
                return(
                    <div className={classes.TextAreaDiv} key={index}>
                        <p className={classes.TextAreaParagraph}>
                        {props.body[index].value}
                        </p>
                        <br/>
                        <br/>
                    </div>
                )
            } else if (el.type  === 'header') {
                return(
                    <div className={classes.headerDiv} key={index}>
                        <h4 className={classes.header}>
                            {props.body[index].value}
                        </h4>
                        <br/>
                        <br/>
                    </div>
                )
            } else if (el.type === 'image') {
                return(
                    <div className={classes.imageDiv} key={index}>
                         <img 
                            src={props.body[index].value} 
                            alt="" className={classes.image} 
                            style={{maxWidth: '100%'}}/>
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
    editPost: state.editPost,
    auth: state.auth
  });
  
export default connect( mapStateToProps, null )(withRouter(PreviewPost));