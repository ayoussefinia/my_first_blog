import React from "react";
import classes from "./Nav.module.css";
import Alien from "./Alien/Alien";


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
      <div className={classes.titleone}>Abducted in</div>
      <div className={classes.titletwo}>Plain Sight</div>
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
      <FontAwesome
        className={classes.socialMediaLink}
        name="facebook-square"
        size="2x"
        // spin
        style={{ color: 'white' }}
      />
      <FontAwesome
        className={classes.socialMediaLink}
        name="instagram"
        size="2x"
        // spin
        style={{ color: 'white' }}
      />
      <FontAwesome
        className={classes.socialMediaLink}
        name="linkedin-square"
        size="2x"
        // spin
        style={{ color: 'white' }}
      />
      <FontAwesome
        className={classes.socialMediaLink}
        name="twitter-square"
        size="2x"
        // spin
        style={{ color: 'white' }}
      />
      </div>

    </div>
    
  );
}

export default Nav;
