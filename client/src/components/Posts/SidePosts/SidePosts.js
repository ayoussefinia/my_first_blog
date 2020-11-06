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
        // this is the array of side posts 
        sidePostsArr: [
            {
              likes: 0,
              dislikes: '',
              comments: '',
              title: ''
            }
        ],
        //intially false once a side post is clicked becomes true
        sidePostClicked: false,
        // when the body of the main article is clicked user is redirected to /post/id where they can like/comment/share
        mainArticleClicked: false
    }

    componentDidMount() {
        // fetch all posts from database
        axios.get('/api/posts').then(response => {
            //sets side posts array 
            this.setState({sidePostsArr: response.data})
        })
    }

    //function changes the large (main) post to the left of the side posts
    changeMainArticle(index) {
        //Redux -- dispatches updateMainArticle action which dispatches 'SET_MAIN_ARTICLE' from the readPost reducer 
        this.props.setMainArticle(this.state.sidePostsArr[index]._id);
        // sets state to true which renders PreviewPost component
        this.setState({sidePostClicked: true})
    }

    //change state to trigger redirect
    setRedirect() {
       this.setState({mainArticleClicked: true});
    }

    //redirects to /post/id which is the CommentSharePost component
    renderRedirectToCommentShare(){
        if (this.state.mainArticleClicked) {
          return <Redirect to={'/post/'+ this.props.readPost.id}/>
        }
    }


    render() {

        return(
            <div>
                {this.renderRedirectToCommentShare()}
                {this.state.sidePostsArr.map(
                    (post, index) => { 
                          return (
                            <div key={index}>
                                <div className={styles.category}>
                                    { 
                                    // adds unique categories to the side posts array by checking if the category is the same as the one before
                                      index=== 0 || 
                                      ( index>0 && 
                                        this.state.sidePostsArr[index].category !== 
                                        this.state.sidePostsArr[index-1].category) 
                                      ?  
                                        this.state.sidePostsArr[index].category
                                      : 
                                        null
                                    }
                                </div>

                                <div 
                                  className={styles.sidePostListItem}
                                  key={post._id}
                                  //changes the main article
                                  onClick={() => this.changeMainArticle(index)}
                                >
                                    <div className={styles.sidePostIcons}>
                                        <div className={styles.sidePostIcon}>
                                            <FontAwesome
                                              name="arrow-up"
                                            
                                              // spin
                                              style={{ color: 'gray' }}
                                            />
                                            <span className={styles.iconData}>{post.likes}</span>
                                        </div>
                                        <div className={styles.sidePostIcon}>
                                          <FontAwesome
                                            name="arrow-down"
                                           
                                            // spin
                                            style={{ color: 'gray' }}
                                            />
                                            <span className={styles.iconData}>{post.dislikes}</span>
                                        </div>
                                        <div className={styles.sidePostIcon}>
                                          <FontAwesome
                                            name="comment"
                                          
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
                                    {this.state.sidePostClicked 
                                    
                                    ? 
                                      <PreviewPost
                                          category={this.props.readPost.category}
                                          title={this.props.readPost.title}
                                          image={this.props.readPost.image}
                                          body={this.props.readPost.body}
                                          author={this.props.auth.user.name}
                                          mode='make'
                                      /> 
                                      
                                    : null
                                    }
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
