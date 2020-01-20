import React, { Component } from "react";
import {withRouter, Redirect} from "react-router-dom";
import classes from "./Body.module.css";
import ActiveMainPost from '../../components/Posts/ActiveMainPost/ActiveMainPost';
import SidePosts from '../Posts/SidePosts/SidePosts';
import Nav from "../Nav/Nav";
import SecondaryNav from '../Nav/SecondaryNav/SecondaryNav'
import axios from 'axios';
import Footer from "../Footer/Footer";
import {connect} from 'react-redux';
import {fetchFirstArticle} from '../../actions/readActions';

class Body extends Component {

 state= {
    mainArticleClicked: false
  }



componentDidMount() {
  
  this.props.inititalizeMainArticle();

  // console.log("body loaded");

  // axios.get('/api/posts/newest').then(response => {
  //   console.log(response.data)
  //   this.setState({
  //     category: response.data.category,
  //     title: response.data.title,
  //     author: response.data.author,
  //     date: response.data.date,
  //     image: response.data.image,
  //     body: response.data.body,
  //     likes: response.data.likes,
  //     dislikes: response.data.dislikes,
  //     comments: response.data.comments
  //   })


  // })
}



renderRedirectToCommentShare(){
  if (this.state.mainArticleClicked) {
    // console.log()
    return <Redirect to={'/post/'+ this.props.readPost.id}/>
  }
}
setRedirect() {
  // console.log('set redirect called')
  // console.log(this);
  this.setState({mainArticleClicked: true});
}

// this.state.mainArticleClicked? <Redirect to=> : 
  render() {   
  
    return (
    
      <div>
      {this.renderRedirectToCommentShare()}
      <Nav/>
      <SecondaryNav/>
        <div className={classes.bodyContainer}>
        <div className={classes.contentContainer}>
        <div className={classes.wrapperDiv}>
        <div 
          className={classes.activeArticleContainer}
          onClick={this.setRedirect.bind(this)}
        >
        
        <ActiveMainPost   
          image={this.props.readPost.image}
          title={this.props.readPost.title}
          author={this.props.readPost.author}
          date= {this.props.readPost.date}
          likes={this.props.readPost.likes}
          dislikes={this.props.readPost.dislikes}
          comments={this.props.readPost.comments}
          body={this.props.readPost.body}
          category={this.props.readPost.category}
        />

        </div>
        <div className={classes.rightSideArticleListContainer}>
            <SidePosts/>
        </div>
        </div>
       
        </div>


        </div>
      

      <Footer/>
    
      </div>


    );

  }
}
const mapDispactchToProps = dispatch => {

return {
    setMainArticle: (id) => dispatch(
      {type: 'SET_MAIN_ARTICLE',
       postId: id 
     }),
     inititalizeMainArticle: () => dispatch(fetchFirstArticle()),
     setMainArticle: () => dispatch(
      {type: 'REDIRECT_TO_COMMENT',
     }),
};
}
const mapStateToProps = state => ({
  readPost: state.readPost,
  auth: state.auth
});

export default connect( mapStateToProps, mapDispactchToProps )(withRouter(Body));