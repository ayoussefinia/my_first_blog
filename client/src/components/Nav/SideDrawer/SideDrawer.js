import React, {Component} from 'react';
import classes from './SideDrawer.module.css';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
var FontAwesome = require('react-fontawesome');

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
    this.setState({joinedClasses: classes.hidden})
    
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
  this.state.sideDrawerToggleOpen?  classList.push(classes.Open) : classList.push(classes.Closed);
  
  let joinedClasses = classList.join(' ');
  this.setState({joinedClasses: joinedClasses})
} else {
  this.setState({joinedClasses: classes.hidden})
}
};


toggleSideDrawer = () => {
  let classList = [];
  classList.push(classes.SideDrawer);
  !this.state.sideDrawerToggleOpen? classList.push(classes.Open) : classList.push(classes.Closed);
  let joinedClasses = classList.join(' ');
  this.setState({joinedClasses: joinedClasses, sideDrawerToggleOpen: !this.state.sideDrawerToggleOpen});
  //  this.setState({})
 }






render() {
  // console.log("joined classes", this.state.joinedClasses);
  const {pathname} = this.props.location;
    // console.log("your Current Path::::", pathname);

let SideDrawerOpenContent =     
<div className={classes.openSideDrawerIcons}>
  <div className={classes.contentItemChoice} onClick={this.props.addParagraphToPost}>
    <FontAwesome
    className={classes.contentItemChoice}
    name="paragraph"
    size="1x"

    />
    <span className={classes.iconFooter} >+ Paragraph</span>
  </div>
  <div className={classes.contentItemChoice}  onClick={this.props.addImageToPost}>
    <FontAwesome
    className={classes.contentItemChoice}
    name="camera"
    size="1.5x"

    />
    <span className={classes.iconFooter}>+ Image</span>
  </div>
  <div className={classes.contentItemChoice} onClick={this.props.addHeadingToPost}>
    <FontAwesome
    className={classes.contentItemChoice}
    name="bold"
    size="1x"

    />
    <span className={classes.iconFooter}>+ Heading</span>
  </div>
</div>

let SideDrawerClosedContent = <FontAwesome
className={classes.wrench}
name="wrench"
size="2x"
// spin

/> 






  // if(!this.state.sideDrawerToggleOpen) {
  //   SideDrawerContent = <FontAwesome
  //   className={classes.socialMediaLink}
  //   name="wrench"
  //   size="2x"
  //   // spin
  //   style={{ color: 'white' }}
  //   /> 
  // } else {
  //   SideDrawerContent = 
  //   <div>
  //      <div>
  //     <FontAwesome
  //     className={classes.socialMediaLink}
  //     name="paragraph"
  //     size="2x"
  //     style={{ color: 'white' }}
  //     />
  //   </div>
  //   <div>
  //     <FontAwesome
  //     className={classes.socialMediaLink}
  //     name="heading"
  //     size="2x"
  //     style={{ color: 'white' }}
  //     />
  //   </div>
  //   <div>
  //     <FontAwesome
  //     className={classes.socialMediaLink}
  //     name="images"
  //     size="2x"
  //     style={{ color: 'white' }}
  //     />
  //    </div>
  //   </div>
   
    
  // }

  
    return (
     
      <div className={this.state.joinedClasses} onClick={this.toggleSideDrawer}>
        {this.state.sideDrawerToggleOpen ? SideDrawerOpenContent : SideDrawerClosedContent}
      </div>
    )
}
}

const mapDispactchToProps = dispatch => {

    return {
      addParagraphToPost: () => dispatch({type: 'ADD_PARAGRAPH_TO_POST' }),
      addImageToPost: () => dispatch({type: 'ADD_IMAGE_TO_POST' }),
      addHeadingToPost: () => dispatch({type: 'ADD_HEADING_TO_POST' })
  };
}

export default connect(null, mapDispactchToProps)(withRouter(SideDrawer));