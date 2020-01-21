import React, {useState, useEffect} from 'react';
import classes from "./SecondaryNav.module.css";
import { NavLink } from "react-router-dom";
const SecondaryNav = () => {

const [state, setState] = useState({
    mobileNavOpen: false,
    navClassArray: [classes.SecondNav]
});

const toggleModalOpen = () =>{
    

    if(!state.mobileNavOpen) {
        let navArray = [...state.navClassArray];
        navArray.push(classes.SecondNavOpen);
        setState({mobileNavOpen: !state.mobileNavOpen, navClassArray: navArray})
    }

    else {
        // let closingArray = [...state.navClassArray];
        // closingArray.push(classes.SecondNavClosed)
        setState({mobileNavOpen: !state.mobileNavOpen, navClassArray: [classes.SecondNav]})
    } 

}


  return (
    <div>
       <div 
        className={classes.mobileNav}
        onClick={toggleModalOpen}
       >
            <div className={state.mobileNavOpen? classes.line1Open : classes.line1}></div>
            <div className={state.mobileNavOpen? classes.line2Open : classes.line2}></div>
            <div className={state.mobileNavOpen? classes.line3Open : classes.line3}></div>
        </div>
    <div className={state.navClassArray.join(' ')}>
 
      <div className={classes.NavLinkContainer}>

        <li className={classes.NavListitem}>
            <NavLink to="/" className={classes.NavigationLink}>
                Home
            </NavLink>
        </li>
        <li className={classes.NavListitem}>
            <NavLink to="/makePost"  className={classes.NavigationLink}>
                Make a Post
            </NavLink>
        </li>

        <li className={classes.NavListitem}>
            <NavLink to="/myPosts" className={classes.NavigationLink}>
                My Posts
            </NavLink>
        </li>
      
      </div>
    <div className={classes.darkShadowMobile}></div>
    </div>
      </div>

  )
}

export default SecondaryNav;