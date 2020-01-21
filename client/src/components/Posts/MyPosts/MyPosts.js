import React, {Component} from 'react';
import classes from './MyPosts.module.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import axios from 'axios';
import Nav from '../../Nav/Nav';
import SecondaryNav from '../../Nav/SecondaryNav/SecondaryNav';
import Footer from  '../../Footer/Footer';
import {likePost} from '../../../actions/readActions';
import DeletePost from '../../Modals/DeletePost/DeletePost';
var FontAwesome = require('react-fontawesome');



class MyPosts extends Component {

  state={
    posts:[],
    editPostClicked: false,
    toggleDeleteModal: false,
    deletePostId: ''
  }

componentDidMount() {
  axios.get("api/posts/byUser/"+ this.props.auth.user.id).then(response => {
    this.setState({posts: response.data})
  })
}

EditPost(post){
  this.props.redirectEditPost(post);
  this.setState({editPostClicked: true});
}

checkEditingMode(){
  if(this.props.editPost.editingMode && this.state.editPostClicked) {
    this.props.history.push("/editPost")
  }
}

toggleDeleteModal(postId) {
  this.setState({toggleDeleteModal: !this.state.toggleDeleteModal, deletePostId: postId})
  window.scrollTo(0,0);
}

deletePost(id) {
  axios.delete('/api/posts/'  + id).then(response => {
    console.log('post deleted', response.data);
    axios.get("api/posts/byUser/"+ this.props.auth.user.id).then(response => {
      console.log('inside get posts after delete', this);
      this.setState({posts: response.data, toggleDeleteModal: false})
    })
  }).catch(err => console.log('Error deletePost MyPosts', err))
}

render() {
  return(
  
    <div >
      {this.checkEditingMode()}
      <Nav/>
      <SecondaryNav/>
      {this.state.toggleDeleteModal? 
        <DeletePost 
          clicked={()=>this.toggleDeleteModal()}
          delete={()=>this.deletePost(this.state.deletePostId)}
        /> : null}
      <div className={classes.container}>
 
        {this.state.posts.map((post, index)=> {
          return(
          <div className={classes.postDiv}>
          <div className={classes.cardInterior}>
          <div 
            className={classes.postImage} 
            style={{
                    backgroundImage: 'url(' + post.image + ')',
                    backgroundPosition: 'center center'
                  }}>
          </div>
          <div className={classes.postTitle}>
          {post.title.substring(0,80)+'...'}
          </div>
          <div className={classes.published}>
          Published: 
            <spanc className={classes.postData}>
            <Moment format="D MMM YYYY" withTitle>
             {post.date}
            </Moment>
            </spanc>
          </div>
          <div className={classes.category}>
          Category: <spanc className={classes.postData}>{post.category}</spanc>
          </div>
          <div className={classes.cardBottom}>
          <div 
            className={classes.editLink}
            onClick={()=> this.EditPost(post)}
          >
          <FontAwesome
            name="edit"
            size="1x"
            // spin
          />
          <span className={classes.action}>Edit</span>
         
          <FontAwesome
            name="edit"
            size="1x"
            // spin
          />
          </div>
          <div 
            className={classes.deleteLink}
            onClick={() => this.toggleDeleteModal(post._id)}
          >
          <FontAwesome
            
            name="trash"
            size="1x"
            // spin
          />
          <span className={classes.action}>Delete</span>
          
          <FontAwesome
            
            name="trash"
            size="1x"
            // spin
          />
          </div>

           
          </div>
          </div>
          </div>
          )
        })}
      </div>
      <Footer/>
    </div>
  )
}


 
}
const mapDispatchToProps = dispatch => {

  return {
    dispatchLiked: (id) => {
      dispatch(
        likePost(id)
      )
    },
    redirectEditPost: (post) => {
      console.log(post)
      dispatch({
        type: 'SET_EDIT_POST',
        payload: post
      })
    }
  }
}

const mapStateToProps = state => ({
    editPost: state.editPost,
    auth: state.auth
  });
  

export default connect( mapStateToProps, mapDispatchToProps )(withRouter(MyPosts));