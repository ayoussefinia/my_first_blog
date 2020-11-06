import axios from "axios";
import {
  INITIALIZE_MAIN_ARTICLE
} from "./types";


export const updateMainArticle = (id) => dispatch => {
  axios.get('api/posts/'+id).then(response => {
    // console.log('from readactions.js response', response.data);
    dispatch({
      type: 'SET_MAIN_ARTICLE',
      payload: response.data
    })
  })
}

export const fetchFirstArticle = () => dispatch => {

  axios.get('/api/posts/newest').then(response => {
    
    dispatch({
      type: 'SET_MAIN_ARTICLE',
      payload: response.data
    })
  })

};

// id: action.payload._id

  export const likePost = (id) => dispatch => {
  

    axios.get('/api/posts/'+ id).then(response => {
      const updateObj = {
        category: response.data.category,
        title: response.data.title,
        author: response.data.author,
        date: response.data.date,
        image: response.data.image,
        body: response.data.body,
        dislikes: response.data.dislikes,
        comments: response.data.comments,
        likes: response.data.likes + 1
      }

      axios.put('/api/posts/'+id, updateObj).then(res => {
        dispatch({
          type: 'SET_MAIN_ARTICLE',
          payload: {
            ...res.data,
            likes: response.data.likes +1
          }
        })
      }).catch(error => console.log('likePost 2 readActions.js', error))
      // dispatch({
      //   type: 'SET_MAIN_ARTICLE',
      //   payload: response.data
      // })
    }).catch(err => console.log('likePost readActions.js', err))
  
  };