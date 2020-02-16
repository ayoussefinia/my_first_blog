import React, {Component} from 'react';
import classes from './CommentSharePost.module.css';
import { withRouter } from 'react-router-dom';
// import ActivePostText from "./ActivePostText/ActivePostText";
import { connect } from 'react-redux';
import Moment from 'react-moment';
import axios from 'axios';
import Nav from '../../Nav/Nav';
import SecondaryNav from '../../Nav/SecondaryNav/SecondaryNav';
import Footer from  '../../Footer/Footer';
import {likePost} from '../../../actions/readActions'
var FontAwesome = require('react-fontawesome');



class CommentSharePost extends Component {

// state= {
//   category: '',
//   title: '',
//   author: '',
//   date: '',
//   image: '',
//   body: [],
//   likes: '',
//   dislikes: '',
//   comments: ''
// }

// likeThisPost() {
//   console.log
//   this.props.dispatchLiked(this.props.readPost.id)
// }
render() {
  return(
    <div >
      <Nav/>
      <SecondaryNav/>
    <div className={classes.container}>
    <div className={classes.activeMainPostCard}>
    <div className={classes.titleStyles}><h4 className={classes.headerStyles}>{this.props.readPost.title}</h4></div>
    <div className={classes.articleTitleFooter}>
    <div className={classes.author}> by- {this.props.readPost.author}</div>
    <div className={classes.publishedDate}>
        Published On: 

        <Moment format="D MMM YYYY" withTitle>
                {this.props.readPost.date}
        </Moment>
    </div>
    </div>

    <div style={{
      backgroundImage: 'url("' + this.props.readPost.image + '")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: window.innerWidth < 660? window.innerWidth*(2/3) : window.innerWidth*(.75)*(2/3)
    }}>
    </div>
    <div className={classes.imageFooter}>
    <div className={classes.imageFotterLeft}>
    <FontAwesome
        className={classes.rate}
        name="thumbs-up"
        size="2x"
        onClick={()=>this.props.dispatchLiked(this.props.readPost.id)}
        // spin
      
    /> <span className={classes.likes}>{this.props.readPost.likes}</span>
    <FontAwesome
        className={classes.rate}
        name="thumbs-down"
        size="2x"
        // spin
  
    />  <span className={classes.dislikes}>{this.props.readPost.dislikes}</span>
    </div>
    <div className={classes.imageFotterRight}>
    <a href="" className={classes.facebookLink}>
    <FontAwesome
        className={classes.facebookShareLink}
        name="facebook"
        size="1x"
        // spin

    /> 
    </a>
    <a href="" className={classes.twitterLink}>
    <FontAwesome
       className={classes.twitterShareLink}
        name="twitter"
        size="1x"
        // spin

    /> 
    </a>
    <a href="" className={classes.linkedInLink}>
    <FontAwesome
       className={classes.linkedInShareLink}
        name="linkedin"
        size="1x"
        // spin

    /> 
    </a>
    </div>
    </div>
    <div className={classes.postText}>

        {this.props.readPost.body.map((el, index)=> {
            if(el.type === 'textArea') {
                return(
                    <div className={classes.TextAreaDiv}>
                        <p className={classes.TextAreaParagraph}>
                        {this.props.readPost.body[index].value}
                        </p>
                        <br/>
                        <br/>
                    </div>
                )
            } else if (el.type  === 'header') {
                return(
                    <div className={classes.headerDiv}>
                        <h4 className={classes.header}>
                            {this.props.readPost.body[index].value}
                        </h4>
                        <br/>
                        <br/>
                    </div>
                )
            } else if (el.type === 'image') {
                return(
                    <div className={classes.imageDiv}>
                         <img src={this.props.readPost.body[index].value} alt="" className={classes.image}/>
                         <br/>
                         <br/>
                    </div>
                )
            }

        })}
    </div>
    </div>
   
    </div>
    <div className={classes.commentBox}>hello</div>
    <Footer/>
    </div>

  )
}


 
}
const mapDispatchToProps = dispatch => {

  return {
    dispatchLiked: (id) => {
      console.log('dispatch like fired')
      dispatch(
        likePost(id)
      )
    }
  }
}

const mapStateToProps = state => ({
    readPost: state.readPost,
    auth: state.auth
  });
  

export default connect( mapStateToProps, mapDispatchToProps )(withRouter(CommentSharePost));