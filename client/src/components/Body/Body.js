import React, { Component } from "react";
import {withRouter} from "react-router-dom";
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

// state= {
//   category: '',
//   title: '',
//   author: '',
//   date: '',
//   image: '',
//   body: [
//     {
//       type: '',
//       value: ''
//     }
//   ],
//   likes: '',
//   dislikes: '',
//   comments: '',
// }

// MainArticle = <div></div>;

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


 
  render() {   
    return (
      <div>
      <Nav/>
      <SecondaryNav/>
        <div className={classes.bodyContainer}>
        <div className={classes.contentContainer}>
        <div className={classes.wrapperDiv}>
        <div className={classes.activeArticleContainer}>
        
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
        <div className={classes.commentBox}>hello</div>

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
     inititalizeMainArticle: () => dispatch(fetchFirstArticle())
};
}
const mapStateToProps = state => ({
  readPost: state.readPost,
  auth: state.auth
});

export default connect( mapStateToProps, mapDispactchToProps )(withRouter(Body));