import React, { Component } from "react";
import classes from "./Body.module.css"


class Body extends Component {
componentDidMount() {
  console.log("body loaded")
}


  render() {
    return (
      <div className={classes.bodyContainer}>
       <div className={classes.contentContainer}>
       <div className={classes.activeArticleContainer}>
       
       </div>
       <div className={classes.rightSideArticleListContainer}></div>
       </div>
      </div>
    );
  }

}

export default Body;
