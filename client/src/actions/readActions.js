import axios from "axios";
import {
  INITIALIZE_MAIN_ARTICLE
} from "./types";


export const updateMainArticle = (id) => dispatch => {
  axios.get('api/posts/'+id).then(response => {
    console.log('from readactions.js response', response.data);
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
