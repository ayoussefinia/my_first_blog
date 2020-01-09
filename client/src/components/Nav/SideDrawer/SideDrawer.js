import React, {Component} from 'react';
import classes from './SideDrawer.module.css';
// import { useState } from 'react';
// import NavigationItems from '';
let lastScrollY = 0;
let ticking = false;
class SideDrawer extends Component {
  state = {
    sideDrawerToggleOpen: false,
    joinedClasses: ''
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);

  }

componentWillUnmount() {
  window.removeEventListener('scroll', this.handleScroll);
}

scrollPosition = React.createRef();
  

handleScroll = () => {
  lastScrollY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      // this.scrollPosition.current.style.top = `${lastScrollY}px`;
      // console.log(lastScrollY);
      ticking = false;
    });
 
    ticking = true;
  }

if(lastScrollY > 150) {
  let classList = [];
  classList.push(classes.SideDrawer);
  classList.push(classes.Closed);
  let joinedClasses = classList.join(' ');
  this.setState({joinedClasses: joinedClasses})
} else {
  this.setState({joinedClasses: ''})
}
};


toggleSideDrawer = () => {
  let classList = [];
  classList.push(classes.SideDrawer);
  this.state.sideDrawerToggleOpen? classList.push(classes.Open) : classList.push(classes.Closed);
  let joinedClasses = classList.join(' ');
  this.setState({joinedClasses: joinedClasses, sideDrawerToggleOpen: !this.state.sideDrawerToggleOpen});
  //  this.setState({})
 }






render() {
  // console.log("joined classes", this.state.joinedClasses);
  return (
    <div className={this.state.joinedClasses} onClick={this.toggleSideDrawer}>
    </div>
  )
}


}

export default SideDrawer