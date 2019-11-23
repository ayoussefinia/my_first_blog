import React from "react";
import classes from "./Alien.module.css"

function Alien() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     React Reading List
    //   </a>
    // </nav>
    <div className={classes.alienContainer}>
      <div className= {classes.alien1}>
      </div>
      <div className={classes.middleContainer}>
        <div className= {classes.alien2}>
        </div>
        <div className= {classes.alien3}>
        </div>
      </div>
      <div className={classes.alienBottom}></div>
      <div className={classes.eye1left}></div>
      <div className={classes.eye2right}></div>
    </div>

  );
}

export default Alien;
