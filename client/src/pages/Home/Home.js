import React, { Component } from "react";
import {withRouter, Redirect} from "react-router-dom";
import classes from "./Home.module.css";
import ActiveMainPost from '../../components/Posts/ActiveMainPost/ActiveMainPost';
import SidePosts from '../../components/Posts/SidePosts/SidePosts';
import Nav from '../../components/Nav/Nav';
import SecondaryNav from '../../components/Nav/SecondaryNav/SecondaryNav'
import Footer from "../../components/Footer/Footer";
import {connect} from 'react-redux';
import {fetchFirstArticle} from '../../actions/readActions';

class Body extends Component {

 state= {
   // when you click main article youre redirected to individual post page /post/id
    mainArticleClicked: false
  }

  componentDidMount() {
    // sends get request to /api/post/newest and fetches most recent article
    this.props.inititalizeMainArticle();
  }

  renderRedirectToCommentShare(){
    //checks state and renders redirect
    if (this.state.mainArticleClicked) {
      return <Redirect to={'/post/'+ this.props.readPost.id}/>
    }
  }

  setRedirect() {
    // set state for redirect
    this.setState({mainArticleClicked: true});
  }

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
      //gets the newest article on page load
      inititalizeMainArticle: () => dispatch(fetchFirstArticle())
  };
}

const mapStateToProps = state => ({
  readPost: state.readPost,
  auth: state.auth
});

export default connect( mapStateToProps, mapDispactchToProps )(withRouter(Body));