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
      <Alien/>
    </div>
  );
}

export default Nav;
