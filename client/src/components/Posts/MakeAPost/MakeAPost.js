import React, {Component}  from 'react';
import classes from './MakeAPost.module.css';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
// import ActivePostText from "./ActivePostText/ActivePostText";
var FontAwesome = require('react-fontawesome');



class MakeAPost extends Component {




imageStyles={
    backgroundImage: 'url("' + this.props.makePost.img + '")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '400px',

  }

// inputStyle= {
//   width: '50%',
//   color: 'black'
// }



  render() {
    return(
      <div className={classes.container}>

           <div className={classes.activePostCard}>
        {/* <div className={classes.titleStyles}><h4 className={classes.headerStyles}>{this.props.title}</h4></div> */}
        <input type="text" className={classes.articleTitleInput} placeholder="type title here"/>
        <div className={classes.articleTitleFooter}>
        <div className={classes.author}> by- {this.props.author}</div>
        <div className={classes.publishedDate}>Published On: {this.props.date}</div>
        </div>
        <div style={this.imageStyles}>
          <input className={classes.inputStyle} type="text" placeholder='image Url'/>
        </div>
        <div className={classes.imageFooter}>
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
        </div>
    
        
        </div>
        {/* <div className={classes.postText}>

        </div> */}
        {this.props.makePost.bodyArr.map((el, index) => {
            if(el.type == 'textArea') {
              return(
                <div className={classes.textAreaDiv}
                
                >
                   <input className={classes.textAreaInput}              placeholder="type text..."/>
                   <FontAwesome
                    className= {classes.deleteIcon}
                    name="times"
                    size="1x"
                    // spin
                    style={{ color: 'black' }}
                    onClick={() => this.props.removeParagraphFromPost(index) }
                    /> 
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    
                    
                </div>
              )
            } else if (el.type == 'headerFour') {
              return (
                <div>
                   <input className={classes.headerFourInput} placeholder="header..."/>
                   <FontAwesome
                    className= {classes.deleteIcon}
                    name="times"
                    size="1x"
                    // spin
                    style={{ color: 'black' }}
                    /> 
                    <br/>
                    <br/>
                    
                </div>
              )
            } else if (el.type == 'image') {
              const imageStyles={
                backgroundImage: 'url("https://via.placeholder.com/350")',
                height: '350px',
                width: '350px',
                display: 'block'
              }
              return (
                <div>
                  <div className={classes.imageDivContainer}>
                  <div style={imageStyles} className={classes.imageDiv}>
                  <input type="text" placeholder="image Url" className={classes.bodyImageInput}/>
                  </div>
                  <FontAwesome
                    className= {classes.deleteIcon}
                    name="times"
                    size="1x"
                    // spin
                    style={{ color: 'black' }}
                    />
                  </div>
                  <br/>
                  <br/>
                </div>
              )
              
            }
          })}
      </div>
     
      )
  }

}

const mapStateToProps = state => ({
  makePost: state.makePost,
  auth: state.auth
});

const mapDispactchToProps = dispatch => {

  return {
  removeParagraphFromPost: (index) => {
    console.log('clicked')
    dispatch(
    {type: 'REMOVE_PARAGRAPH_FROM_POST',
     index: index
    })
  }
};
}

// const mapDispatchToProps 
export default connect( mapStateToProps, mapDispactchToProps )(withRouter(MakeAPost));