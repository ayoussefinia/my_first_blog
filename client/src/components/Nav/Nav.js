import React from "react";
import classes from "./Nav.module.css";
import Alien from "./Alien/Alien";
import { NavLink} from "react-router-dom";


var FontAwesome = require('react-fontawesome');


function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     React Reading List
    //   </a>
    // </nav>

    <div>    

      <div className= {classes.navbar}>
      <div className={classes.navUserName}>
        Welcome Back: <span className={classes.firstName}>John</span>
      </div>
      {/* <div className={classes.titleone}>Abducted in</div>
      <div className={classes.titletwo}>Plain Sight</div> */}
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
      <div className={classes.socialMediaLinks}>
        <NavLink to="/" className={classes.LogInnLinks}>
          Log In / Sign Up
        </NavLink>

      </div>

    </div>
    
  );
}

export default Nav;
