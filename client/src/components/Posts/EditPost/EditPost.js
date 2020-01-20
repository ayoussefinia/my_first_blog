import React, {Component}  from 'react';
import classes from './EditPost.module.css';
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
var FontAwesome = require('react-fontawesome');

let imageStyles;

class MakeAPost extends Component {
state ={
  togglePreview: false,
  toggleMakePost: false
}


componentDidMount(){
  console.log(this.props.auth.user);
}

togglePreviewModal= () => {
this.setState({togglePreview: !this.state.togglePreview})
window.scrollTo(0,0);
}

toggleMakePostModal= () => {
  // this.setState({toggleMakePost: !this.state.toggleMakePost})
  this.props.toggleMakePostModal();
  window.scrollTo(0,0);
}
postArticle = () => {
  this.props.publishPostToDatabase(this.props.editPost, this.props.auth)
 
}


// inputStyle= {
//   width: '50%',
//   color: 'black'
// }

//resize images that are too big
onImgLoad = ({target:img}) => {
  console.log(img.offsetWidth, img.offsetHeight, window.innerWidth);
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
      hello edit post
       {this.state.togglePreview? 
        <PreviewModal
          clicked={this.togglePreviewModal} 
        >  
          <PreviewPost
           category={this.props.editPost.category}
           title={this.props.editPost.title}
           image={this.props.editPost.img}
           body={this.props.editPost.bodyArr}
           author={this.props.auth.user.name}
          />
        </PreviewModal> 
      : null}
      {this.props.editPost.modalOpen? 
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
          value = {this.props.editPost.category}
          className={classes.categoryInput}
        />
      </div>
      
      {/* <div className={classes.titleStyles}><h4 className={classes.headerStyles}>{this.props.title}</h4></div> */}
      <input 
            type="text" 
            className={classes.articleTitleInput} 
            placeholder="type title here"
            onChange= {this.props.twoWayBindPostTitle}
            value =  {this.props.editPost.title}
            />

      <div className={classes.articleTitleFooter}>
      <div className={classes.author}> by- {this.props.author}</div>
      <div className={classes.publishedDate}>Published On: {this.props.date}</div>
      </div>
      <div 
          style={
              {
                backgroundImage: 'url("' + this.props.editPost.img + '")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                height: '400px',
                opacity: '.75'
              }
            }>
        <input className={classes.inputStyle}
               type="text" 
               placeholder='paste image Url'
               onChange= {this.props.setMainImage}
               value =  {this.props.editPost.img}
               />
      </div>
      <div className={classes.imageFooter}>
      <div className={classes.imageFotterLeft}>
      <FontAwesome
          className={classes.socialMediaLink}
          name="thumbs-up"
          size="2x"
          // spin
          style={{ color: 'gray' }}
          disabled='true'
      /> <span className={classes.likes}>{this.props.likes}</span>
      <FontAwesome
          className={classes.socialMediaLink}
          name="thumbs-down"
          size="2x"
          // spin
          style={{ color: 'gray' }}
          disabled='true'
      />  <span className={classes.dislikes}>{this.props.dislikes}</span>
      </div>
      <div className={classes.imageFotterRight}>
      <div  className={classes.facebookLink}>
      <FontAwesome
          className={classes.facebookShareLink}
          name="facebook"
          size="1x"
          disabled='true'
          style={{ color: 'white' }}
      /> 
      </div>
      <div  className={classes.twitterLink}>
      <FontAwesome
         
          name="twitter"
          size="1x"
          disabled='true'
          style={{ color: 'white' }}
      /> 
      </div>
      <div  disabled='true' className={classes.linkedInLink}>
      <FontAwesome
         
          name="linkedin"
          size="1x"
          disabled='true'
          style={{ color: 'white' }}
      /> 
      </div>
      </div>
      </div>
  
      
      </div>
      {/* <div className={classes.postText}>

      </div> */}
      {this.props.editPost.bodyArr.map((el, index) => {
          if(el.type == 'textArea') {
            return(
              <div   key={index}>
                <div className={classes.textAreaDiv}>
                  <textarea 
                    className={classes.textAreaInput}             
                    placeholder="type text..."
                    onChange={(event) => this.props.twoWayBindParagraphText(event,index)}
                    value={this.props.editPost.bodyArr[index].value}
                  
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
                    value={this.props.editPost.bodyArr[index].value}
                   
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
            // const imageStyles={
            //   backgroundImage: 'url("' + this.props.makePost.bodyArr[index].value + '")',
            //   backgroundPosition: 'center center',
            //   backgroundRepeat: 'no-repeat',
           
           
            //   display: 'block'
            // }
            // const image = <img src={this.props.makePost.bodyArr[index].value}/>
           
            return (
              <div key={index}>
                <div className={classes.imageDivContainer}>
                <div style={imageStyles} className={classes.imageInputDiv}>
                <input 
                  type="text" 
                  placeholder="image Url" 
                  className={classes.bodyImageInput}
                  onChange={(event) => this.props.twoWayBindParagraphText(event,index)}
                  value={this.props.editPost.bodyArr[index].value}
                  
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
                    src={this.props.editPost.bodyArr[index].value}
                    onLoad={this.onImgLoad}
                    className={classes.postImage}
                    style={{width: this.state.imgWidth, height: this.state.imgHeight}}
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
  editPost: state.editPost,
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
    publishPostToDatabase : (postState, authState) => {
      dispatch(
        publishPost(postState, authState)
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
