import React, {Component}  from 'react';
import classes from './MakeAPost.module.css';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';
// import ActivePostText from "./ActivePostText/ActivePostText";
var FontAwesome = require('react-fontawesome');

let imageStyles;

class MakeAPost extends Component {
state ={}

// componentDidUpdate() {
//   console.log('updating',  this.props.makePost.img);
// imageStyles={
//     backgroundImage: 'url("' + this.props.makePost.img + '")',
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     height: '400px',

//   }
// }



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
      <div className={classes.container}>

           <div className={classes.activePostCard}>
        {/* <div className={classes.titleStyles}><h4 className={classes.headerStyles}>{this.props.title}</h4></div> */}
        <input 
              type="text" 
              className={classes.articleTitleInput} 
              placeholder="type title here"
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
                  height: '400px',
                  opacity: '.75'
                }
              }>
          <input className={classes.inputStyle}
                 type="text" 
                 placeholder='image Url'
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
                    // spin
                    
                    onClick={() => this.props.removeItemFromPost(index) }
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
                   <input 
                    className={classes.headerFourInput}   
                    placeholder="header..."
                    onChange={(event) => this.props.twoWayBindParagraphText(event,index)}
                    value={this.props.makePost.bodyArr[index].value}
                    />
                   <FontAwesome
                    className= {classes.deleteIcon}
                    name="times"
                    size="1x"
                    // spin
                 
                    onClick={() => this.props.removeItemFromPost(index) }
                    /> 
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
              const image = <img src={this.props.makePost.bodyArr[index].value}/>
             
              return (
                <div>
                  <div className={classes.imageDivContainer}>
                  <div style={imageStyles} className={classes.imageDiv}>
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
                    // spin
                 
                    onClick={() => this.props.removeItemFromPost(index) }
                    />

                  </div>
                    <img  
                      src={this.props.makePost.bodyArr[index].value}
                      onLoad={this.onImgLoad}
                      style={{width: this.state.imgWidth, height: this.state.imgHeight}}
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
    }
  };
}

// const mapDispatchToProps 
export default connect( mapStateToProps, mapDispactchToProps )(withRouter(MakeAPost));
