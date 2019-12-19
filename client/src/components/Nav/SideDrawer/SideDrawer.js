import React from 'react';
import classes from './SideDrawer.module.css';
import { useState } from 'react';
// import NavigationItems from '';

const SideDrawer = () => {

const [state, setState] = useState({
  sideDrawerToggleOpen: false 
});

 const toggleSideDrawer = () => {
   setState({sideDrawerToggleOpen: !state.sideDrawerToggleOpen})
 }

 const classList = [];
 classList.push(classes.SideDrawer);
 state.sideDrawerToggleOpen? classList.push(classes.Open) : classList.push(classes.Closed);
 const joinedClasses = classList.join(' ');
 console.log("class list", joinedClasses);

  return (

    <div className={joinedClasses} onClick={toggleSideDrawer}>

    </div>
  )

}

export default SideDrawer