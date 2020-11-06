import React, {Component} from 'react';
import classes from './ActiveMainPost.module.css';
import { withRouter } from 'react-router-dom';
// import ActivePostText from "./ActivePostText/ActivePostText";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import axios from 'axios';
var FontAwesome = require('react-fontawesome');



class ActiveMainPost extends Component {

render() {
  return(
    <div className={classes.activeMainPostCard}>
    <div className={classes.titleStyles}><h4 className={classes.headerStyles}>{this.props.title}</h4></div>
    <div className={classes.articleTitleFooter}>
    <div className={classes.author}> by- {this.props.author}</div>
    <div className={classes.publishedDate}>
        Published On: 

        <Moment format="D MMM YYYY" withTitle>
                {this.props.date}
        </Moment>
    </div>
    </div>
    <div style={{
      backgroundImage: 'url("' + this.props.image + '")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: window.innerWidth*(.65)*(2/3)*.75
    }}>
    </div>
    {/* <div className={classes.imageFooter}>
    <div className={classes.imageFotterLeft}>
    <FontAwesome
        className={classes.socialMediaLink}
        name="thumbs-up"
        size="2x"
        // spin
        style={{ color: 'gray' }}
    /> <span className={classes.likes}>{this.props.likes}</span>
    <FontAwesome
        className={classes.socialMediaLink}
        name="thumbs-down"
        size="2x"
        // spin
        style={{ color: 'gray' }}
    />  <span className={classes.dislikes}>{this.props.dislikes}</span>
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
    </div> */}
    <div className={classes.postText}>
        {this.props.body.map((el, index)=> {
            if(el.type === 'textArea') {
                return(
                    <div className={classes.TextAreaDiv} key={index}>
                        <p className={classes.TextAreaParagraph}>
                        {this.props.body[index].value}
                        </p>
                        <br/>
                        <br/>
                    </div>
                )
            } else if (el.type  === 'header') {
                return(
                    <div className={classes.headerDiv} key={index}>
                        <h4 className={classes.header}>
                            {this.props.body[index].value}
                        </h4>
                        <br/>
                        <br/>
                    </div>
                )
            } else if (el.type === 'image') {
                return(
                    <div className={classes.imageDiv} key={index}>
                         <img src={this.props.body[index].value} alt="" className={classes.image}/>
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


 
}


const mapStateToProps = state => ({
    makePost: state.makePost,
    auth: state.auth
  });
  

export default connect( mapStateToProps, null )(withRouter(ActiveMainPost));