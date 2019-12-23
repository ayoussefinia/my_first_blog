import React from 'react';
import styles from "./SidePosts.module.css";
var FontAwesome = require('react-fontawesome');

const SidePosts = () => {

const sidePostData = 

      [
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 1,
          dislikes: 6,
          comments: 9
        },
        {
          postTitle: "eius deserunt earum modi porro dolorem illo itaque rerum odio. Animi, itaque id",
          likes: 3,
          dislikes: 6,
          comments: 9
        },
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 2,
          dislikes: 6,
          comments: 9
        },
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 7,
          dislikes: 0,
          comments: 9
        },
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 15,
          dislikes: 6,
          comments: 4
        },
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 45,
          dislikes: 6,
          comments: 1
        },
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 5,
          dislikes: 1,
          comments: 9
        },
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 5,
          dislikes: 6,
          comments: 6
        },
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 5,
          dislikes: 4,
          comments: 9
        },
        {
          postTitle: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nobis sint dolor ea totam?",
          likes: 5,
          dislikes: 4,
          comments: 9
        }
      ]






  return(
    sidePostData.map(
      post => { 
        return (
          <div className={styles.sidePostListItem}>
      <div className={styles.sidePostIcons}>
        <div className={styles.sidePostIcon}>
          <FontAwesome
          name="arrow-up"
          size="1x"
          // spin
          style={{ color: 'gray' }}
          />
          <span className={styles.iconData}>{post.likes}</span>
        </div>
        <div className={styles.sidePostIcon}>
         <FontAwesome
          name="arrow-down"
          size="1x"
          // spin
          style={{ color: 'gray' }}
          />
          <span className={styles.iconData}>{post.dislikes}</span>
        </div>
        <div className={styles.sidePostIcon}>
         <FontAwesome
          name="comment"
          size="1x"
          // spin
          style={{ color: 'gray' }}
          />
          <span className={styles.iconData}>{post.comments}</span>
        </div>
      </div>
      <div className={styles.sidePostTitle}>    
        {post.postTitle}
      </div>
    </div>
        )
      }
    )
    
  )
}

export default SidePosts;