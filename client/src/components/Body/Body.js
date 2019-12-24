import React, { Component } from "react";
import classes from "./Body.module.css";
import ActivePost from '../../components/Posts/ActivePost/ActivePost';
import SidePosts from '../Posts/SidePosts/SidePosts';



class Body extends Component {
componentDidMount() {
  console.log("body loaded")
}


  render() {   
    return (
      <div>
                <div className={classes.bodyContainer}>
        <div className={classes.contentContainer}>
        <div className={classes.wrapperDiv}>
        <div className={classes.activeArticleContainer}>
        <ActivePost   
            img='https://images.unsplash.com/photo-1521478413868-1bbd982fa4a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
            alt='new years picture'
            title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde libero modi asperiores nihil velit minus eligendi? "
            author="Jake Jakeson"
            date="December 15th 2019"
            likes='10'
            dislikes='4'

          />
          
        </div>
        <div className={classes.rightSideArticleListContainer}>
            <SidePosts/>
        </div>
        </div>
       
        </div>
        <div className={classes.commentBox}>hello</div>

        </div>
      
      </div>
  

    );
  }

}

export default Body;
