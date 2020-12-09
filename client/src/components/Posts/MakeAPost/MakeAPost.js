import React, {Component}  from 'react';
import classes from './MakeAPost.module.css';
import { connect } from "react-redux";
import {withRouter, Redirect} from 'react-router-dom';
import  PreviewModal  from '../../Modals/PreviewModal/PreviewModal';
import PostModal from '../../Modals/PostModal/PostModal';
import PreviewPost from '../PreviewPost/PreviewPost';
import {publishPost} from '../../../actions/authActions';
import Nav from '../../Nav/Nav';
import SecondaryNav from '../../Nav/SecondaryNav/SecondaryNav';
import Footer from '../../Footer/Footer';
import SideDrawer from '../../Nav/SideDrawer/SideDrawer';
// import { createBrowserHistory } from 'history';
var FontAwesome = require('react-fontawesome');

let imageStyles;

class MakeAPost extends Component {
state ={
  togglePreview: false,
  toggleMakePost: false
}


componentDidMount(){
  // component uses redux 
}

// function used to display preview modal once the preview button at the bottom of the page is clicked
togglePreviewModal= () => {
  this.setState({togglePreview: !this.state.togglePreview})
  window.scrollTo(0,0);
}

//function prompts a user with "are you sure" modal to publish post
toggleMakePostModal= () => {
  this.props.toggleMakePostModal();
  window.scrollTo(0,0);
}

//after yes is clicked on the "are you sure" modal this function publishes post to the database
postArticle = () => {
  console.log(this.props.makePost);

  this.props.publishPostToDatabase(this.props.makePost, this.props.auth, this.props.history)
}

//resize images that are too big to fit parent container
onImgLoad = ({target:img}) => {
  // console.log(img.offsetWidth, img.offsetHeight, window.innerWidth);
  if(img.offsetWidth >= window.innerWidth) {
    const aspectRatio = img.offsetWidth/img.offsetHeight;
    const newImageWidth = window.innerWidth * .75;
    const newImageHeight = newImageWidth/aspectRatio
    this.setState({imgWidth: newImageWidth, imgHeight: newImageHeight})
  }
}

  render() {
    return(
      <div>
        <Nav/>
        <SecondaryNav/>
        <SideDrawer/>
        {this.state.togglePreview? 
          <PreviewModal
            clicked={this.togglePreviewModal}
          >  
          <PreviewPost
            category={this.props.makePost.category}
            title={this.props.makePost.title}
            image={this.props.makePost.img}
            body={this.props.makePost.bodyArr}
            author={this.props.auth.user.name}
            mode='make'
          />
          </PreviewModal> 
        : null}
        {this.props.makePost.modalOpen? 
          <PostModal
            clicked={this.props.toggleMakePostModal} 
            post = {this.postArticle}
          />  
        : null}
        <div className={classes.container}>
          <div className={classes.activePostCard}>
            <div className={classes.categoryInputDiv}>
              <input 
                type="text" 
                placeholder="what category?"
                onChange={this.props.twoWayBindCategory}
                value = {this.props.makePost.category}
                className={classes.categoryInput}
              />
            </div>
            <input 
                type="text" 
                className={classes.articleTitleInput} 
                placeholder="whats your title?"
                onChange= {this.props.twoWayBindPostTitle}
                value =  {this.props.makePost.title}
                />

            <div className={classes.articleTitleFooter}>
              <div className={classes.author}> by- {this.props.author}</div>
              <div className={classes.publishedDate}>Published On: {this.props.date}</div>
            </div>
            <div 
              style={
                  {
                    backgroundImage: 'url("' + this.props.makePost.img + '")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: window.innerWidth<460? window.innerWidth*(2/3) : window.innerWidth*(.6)*(2/3),
                    opacity: '.75'
                  }
                }>
              <input className={classes.inputStyle}
                type="text" 
                placeholder='paste image Url'
                onChange= {this.props.setMainImage}
                value =  {this.props.makePost.image}
                />
            </div>
            <div className={classes.imageFooter}>
              <div className={classes.imageFotterLeft}>
                <FontAwesome
                    className={classes.socialMediaLink}
                    name="thumbs-up"
                    size="2x"
                    style={{ color: 'gray' }}
                /> 
                <span className={classes.likes}>{this.props.likes}</span>
                <FontAwesome
                    className={classes.socialMediaLink}
                    name="thumbs-down"
                    size="2x"
                    style={{ color: 'gray' }}
                /> 
                <span className={classes.dislikes}>{this.props.dislikes}</span>
              </div>
              <div className={classes.imageFotterRight}>
                <a href="" className={classes.facebookLink}>
                  <FontAwesome
                      className={classes.facebookShareLink}
                      name="facebook"
                      size="1x"
                      style={{ color: 'white' }}
                  /> 
                </a>
                <a href="" className={classes.twitterLink}>
                  <FontAwesome
                      name="twitter"
                      size="1x"
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
        {
          //fetches the elements of the post from the redux store and lists them on the page
        }
        {this.props.makePost.bodyArr.map((el, index) => {
          if(el.type == 'textArea') {
            return(
              <div   key={index} >
                <div className={classes.textAreaDiv}>
                  <textarea 
                    className={classes.textAreaInput}             
                    placeholder="type text..."
                    onChange={(event) => this.props.twoWayBindParagraphText(event,index)}
                    value={this.props.makePost.bodyArr[index].value}
                    />
                  <FontAwesome
                    className= {classes.deleteIcon}
                    name="times"
                    size="1x"
                    onClick={() => this.props.removeItemFromPost(index) }
                    />
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            )
          } else if (el.type == 'header') {
            return (
              <div  key={index}>
                <div className={classes.headerDiv}>
                  <input 
                    className={classes.headerInput}   
                    placeholder="header..."
                    onChange={(event) => this.props.twoWayBindParagraphText(event,index)}
                    value={this.props.makePost.bodyArr[index].value}
                    />
                  <FontAwesome
                    className= {classes.deleteIcon}
                    name="times"
                    size="1x"
                    onClick={() => this.props.removeItemFromPost(index) }
                    /> 
                </div>
                <br/>
                <br/>
              </div>
            )
          } else if (el.type == 'image') {
              return (
                <div key={index}>
                  <div className={classes.imageDivContainer}>
                    <div style={imageStyles} className={classes.imageInputDiv}>
                      <input 
                        type="text" 
                        placeholder="image Url" 
                        className={classes.bodyImageInput}
                        onChange={(event) => this.props.twoWayBindParagraphText(event,index)}
                        value={this.props.makePost.bodyArr[index].value}
                      />
                      <FontAwesome
                        className= {classes.deleteIcon}
                        name="times"
                        size="1x"
                        onClick={() => this.props.removeItemFromPost(index) }
                        />
                    </div>
                    <br/>
                    <img  
                      src={this.props.makePost.bodyArr[index].value}
                      onLoad={this.onImgLoad}
                      className={classes.postImage}
                      style={{width: this.state.imgWidth, 
                              height: this.state.imgHeight}}
                    />
                  </div>
                  <br/>
                  <br/>
                </div>
              )
          }
        })}

      <div className={classes.bottomPostButtonsDiv}>
        <button 
          className={classes.previewButton}
          onClick={this.togglePreviewModal}
        >
          
          Preview
        </button>
        <button 
          className={classes.postButton}
          onClick={this.toggleMakePostModal}
        >
          Post
        </button>
      </div>
    </div>
    <Footer/>
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
    removeItemFromPost: (index) => {
      dispatch(
        {
          type: 'REMOVE_ITEM_FROM_POST',
          index: index
        }
      )
    },
    twoWayBindParagraphText: (event, index) => {
      dispatch(
        {
          type: 'UPDATE_INPUT_TEXT',
          index: index,
          payload: event.target.value
        }
      )
    },
    twoWayBindPostTitle: (event) => {
      dispatch(
            {
              type: 'UPDATE_POST_TITLE',
              payload: event.target.value
            }
      )  
    },
    setMainImage: (event) => {
      dispatch(
            {
              type: 'SET_MAIN_IMAGE',
              payload: event.target.value
            }
      )  
    },
    twoWayBindCategory: (event) => {
      dispatch(
            {
              type: 'SET_POST_CATEGORTY',
              payload: event.target.value
            }
      )  
    }, 
    publishPostToDatabase : (postState, authState, history) => {
      dispatch(
        publishPost(postState, authState, history)
      )
    },
    toggleMakePostModal : () => {
      dispatch(
        {
          type: 'TOGGLE_PUBLISH_MODAL'
        }
      )
    }
  };
}

// const mapDispatchToProps 
export default connect( mapStateToProps, mapDispactchToProps )(withRouter(MakeAPost));
