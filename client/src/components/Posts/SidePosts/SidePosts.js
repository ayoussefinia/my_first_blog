import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Redirect} from "react-router-dom";
import {updateMainArticle} from '../../../actions/readActions';
import styles from "./SidePosts.module.css";
import axios from 'axios';
import CommentSharePost from "../CommentSharePost/CommentSharePost";
import PreviewPost from '../PreviewPost/PreviewPost';
var FontAwesome = require('react-fontawesome');


class SidePosts extends Component {
  state = {
    sidePostsArr: [
      {
        likes: 0,
        dislikes: '',
        comments: '',
        title: ''
      }
    ],
    showHideDivArr: [

    ],
    mainArticleClicked: false
  }
componentDidMount() {

axios.get('/api/posts').then(response => {
console.log('RESPonse Posts', response.data)
const mobileDivArray = response.data.map((el) => false);
  this.setState({sidePostsArr: response.data, showHideDivArr: mobileDivArray})
})
}

changeMainArticle(index) {
  this.props.setMainArticle(this.state.sidePostsArr[index]._id);
  const mobileDivArrayCopy=[...this.state.showHideDivArr];
  mobileDivArrayCopy[index] = !mobileDivArrayCopy[index];
  this.setState({showHideDivArr: mobileDivArrayCopy})
}
setRedirect() {

  this.setState({mainArticleClicked: true});
}
renderRedirectToCommentShare(){
  if (this.state.mainArticleClicked) {
    return <Redirect to={'/post/'+ this.props.readPost.id}/>
  }
}




  render() {

  
    // console.log('*************', this.state.sidePostsArr)
    return(
    
     <div>
      {this.renderRedirectToCommentShare()}
     {this.state.sidePostsArr.map(
        (post, index) => { 
          return (
        <div >
        <div className={styles.category}>
        { index=== 0 || (index>0 && this.state.sidePostsArr[index].category !== this.state.sidePostsArr[index-1].category) ?  
         this.state.sidePostsArr[index].category 
          : null}
        </div>

        <div 
          className={styles.sidePostListItem}
          key={post._id}
          // onClick={() => this.props.setMainArticle(this.state.sidePostsArr[index]._id)}
          onClick={() => this.changeMainArticle(index)}
        >
        <div className={styles.sidePostIcons}>
          <div className={styles.sidePostIcon}>
            <FontAwesome
            name="arrow-up"
            size="1x"
            // spin
            style={{ color: 'gray' }}
            />
            <span className={styles.iconData}>{post.likes}</span>
          </div>
          <div className={styles.sidePostIcon}>
           <FontAwesome
            name="arrow-down"
            size="1x"
            // spin
            style={{ color: 'gray' }}
            />
            <span className={styles.iconData}>{post.dislikes}</span>
          </div>
          <div className={styles.sidePostIcon}>
           <FontAwesome
            name="comment"
            size="1x"
            // spin
            style={{ color: 'gray' }}
            />
            <span className={styles.iconData}>{post.comments}</span>
          </div>
        </div>
        <div className={styles.sidePostTitle}>    

          {post.title.substring(0, 55)+ '...'}
        </div>
      </div>
      <div 
        className={styles.mobileScreenArticle}
        onClick={this.setRedirect.bind(this)}
        >
      {this.state.showHideDivArr[index]? 
        <PreviewPost
            category={this.props.readPost.category}
            title={this.props.readPost.title}
            image={this.props.readPost.image}
            body={this.props.readPost.body}
            author={this.props.auth.user.name}
            mode='make'
        /> : null}
      </div>
        </div>
       
          )
        }
      )}
      
       
     </div>

     

    )
  }



}
const mapDispactchToProps = dispatch => {

  return {
      setMainArticle: (id) => dispatch(updateMainArticle(id))
  };
  }
  const mapStateToProps = state => ({
    readPost: state.readPost,
    auth: state.auth
  });
  
  export default connect( mapStateToProps, mapDispactchToProps )(withRouter(SidePosts));
