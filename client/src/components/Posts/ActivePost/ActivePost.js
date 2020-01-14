import React from 'react';
import classes from './ActivePost.module.css';
import ActivePostText from "./ActivePostText/ActivePostText";
var FontAwesome = require('react-fontawesome');



const ActivePost = (props) => {
  const imageStyles={
    backgroundImage: 'url("' + props.img + '")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  return(
    <div className={classes.activePostCard}>
    <div className={classes.titleStyles}><h4 className={classes.headerStyles}>{props.title}</h4></div>
    <div className={classes.articleTitleFooter}>
    <div className={classes.author}> by- {props.author}</div>
    <div className={classes.publishedDate}>Published On: {props.date}</div>
    </div>
    <div style={imageStyles}>
    </div>
    <div className={classes.imageFooter}>
    <div className={classes.imageFotterLeft}>
    <FontAwesome
        className={classes.socialMediaLink}
        name="thumbs-up"
        size="2x"
        // spin
        style={{ color: 'gray' }}
    /> <span className={classes.likes}>{props.likes}</span>
    <FontAwesome
        className={classes.socialMediaLink}
        name="thumbs-down"
        size="2x"
        // spin
        style={{ color: 'gray' }}
    />  <span className={classes.dislikes}>{props.dislikes}</span>
    </div>
    <div className={classes.imageFotterRight}>
    <a href="" className={classes.facebookLink}>
    <FontAwesome
        className={classes.facebookShareLink}
        name="facebook"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    <a href="" className={classes.twitterLink}>
    <FontAwesome
       
        name="twitter"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    <a href="" className={classes.linkedInLink}>
    <FontAwesome
       
        name="linkedin"
        size="1x"
        // spin
        style={{ color: 'white' }}
    /> 
    </a>
    </div>
    </div>
    <div className={classes.postText}>
    {/* <ActivePostText/> */}
    <div>
    <span className={classes.indent}></span>
    >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam, magnam molestias dolor voluptate commodi ipsa quo quis dolorem officia porro, amet provident vero sapiente omnis ipsum! Alias veniam debitis delectus.
    Quia molestiae dolores accusamus ut quasi quos adipisci nisi autem sequi earum laborum, ab veniam et expedita nostrum! Doloribus dolorum, sequi ipsa qui minima nulla officiis hic deserunt quis sapiente!
   <br/>
   <br/>
   <h4 className={classes.h4}>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h4>
   <br/>
   <br/>
   >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum magnam quis consequuntur nihil! Doloremque nesciunt cumque aspernatur, rem dolores cupiditate quasi veritatis consectetur unde alias deleniti dignissimos debitis quae!
   Et praesentium tenetur fuga rem ad ex obcaecati non autem quidem eum unde accusantium, sit voluptatibus eaque hic libero dolorum velit, incidunt iste? In nostrum harum perferendis! Eum, corporis id.
   Minima a modi, praesentium unde asperiores, iusto similique nostrum incidunt quaerat magnam qui nisi, deleniti cum ipsam distinctio fugiat amet rem reiciendis assumenda minus ullam esse nemo! Dolorem, neque itaque!
   <br/>
   <br/>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima qui veritatis quaerat. Quasi inventore vero deleniti repellendus! Unde, est atque quasi nostrum dolorum, in impedit nihil ratione, repellat harum voluptas.Qui ducimus ut facilis iste sit nulla dicta rem, optio et distinctio ipsam odio fugit repudiandae minus. Quia aliquam error, deleniti officiis minima quo odit veniam! Aut obcaecati laboriosam quod.
   <br/>
   <br/>
   <h5 className={classes.h4}>
   inventore vero deleniti repellendus! Unde, est atque quasi nostrum dolorum
   </h5>
   <br/>
   <br/>
   nihil! Doloremque nesciunt cumque aspernatur, rem dolores cupiditate quasi veritatis consectetur unde alias deleniti dignissimos debitis quae!
   Et praesentium tenetur fuga rem ad ex obcaecati non autem quidem eum unde accusantium, sit voluptatibus eaque hic libero dolorum velit, incidunt iste? In nostrum harum perferendis! Eum, corporis id.
    </div>
    </div>
    <button className={classes.backButtonContainer}>yo</button>
    </div>
  )
}

export default ActivePost