import React from "react";
import classes from "./Nav.module.css"
import Alien from "./Alien/Alien"

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     React Reading List
    //   </a>
    // </nav>

    <div className= {classes.navbar}>
    <div className={classes.titleone}>The Catchy</div>
    <div className={classes.titletwo}>Blog Title</div>
    <div className={classes.spinnerContainer}>
      <div className={classes.navlinkspinner}>
        <div className={classes.link1}></div>
        <div className={classes.link2}></div>
        <div className={classes.link3}></div>
        <div className={classes.link4}></div>
        <div className={classes.link5}></div>
        <div className={classes.link6}></div>
      </div>
    </div>

      <Alien/>
    </div>
  );
}

export default Nav;
