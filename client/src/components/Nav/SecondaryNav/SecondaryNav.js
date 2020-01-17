import React from "react";
import classes from "./SecondaryNav.module.css";
import { NavLink } from "react-router-dom";
const SecondaryNav = () => {

  return (
    <div className={classes.SecondNav}>
      <div className={classes.NavLinkContainer}>
        <li className={classes.NavListitem}>
            <NavLink to="/makePost"  className={classes.NavigationLink}>
                Make a Post
            </NavLink>
        </li>
        <li className={classes.NavListitem}>
            <NavLink to="/" className={classes.NavigationLink}>
                My Posts
            </NavLink>
        </li>
        <li className={classes.NavListitem}>
            <NavLink to="/" className={classes.NavigationLink}>
                Some other link
            </NavLink>
        </li>
      
      </div>

    </div>
  )
}

export default SecondaryNav;