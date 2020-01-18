import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateMainArticle} from '../../../actions/readActions';
import styles from "./SidePosts.module.css";
import axios from 'axios';
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
    ]
  }
componentDidMount() {

axios.get('/api/posts').then(response => {
console.log('RESPonse Posts', response.data)
  this.setState({sidePostsArr: response.data})
})
}

// clicked(event) {
//   console.log(event.target);
// }




  render() {
    console.log('*************', this.state.sidePostsArr)
    return(
      
      this.state.sidePostsArr.map(
        (post, index) => { 
          return (
        <div 
          className={styles.sidePostListItem}
          key={post._id}
          onClick={() => this.props.setMainArticle(this.state.sidePostsArr[index]._id)}
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
          )
        }
      )
      
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
  
  export default connect( mapStateToProps, mapDispactchToProps )(SidePosts);
