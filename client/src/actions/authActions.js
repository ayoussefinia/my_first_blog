import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
// import { createBrowserHistory } from 'history';



import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  PUBLISH_POST,
  RESET_STATE,
  TOGGLE_PUBLISH_MODAL,
  HANDLE_PUBLISH_ERROR
} from "./types";
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log("decoded token:", decoded);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const resetState = () =>  {
  // dispatch(togglePublishModal());
  return {
    type: RESET_STATE
  }
}

export const togglePublishModal = () => {
  return {
    type: TOGGLE_PUBLISH_MODAL
  }
}

export const handlePublishError = () => dispatch =>  {
  // dispatch(togglePublishModal());
  return {
    type: HANDLE_PUBLISH_ERROR
  }
}

export const publishPost = (postState, authState, history) => dispatch => {
  
  const postObject = {
    category: postState.category,
    title: postState.title,
    author: authState.user.name,
    image: postState.img,
    body: postState.bodyArr,
    authorId: authState.user.id,
    likes: 0,
    dislikes: 0,
    comments: 0
  }

  const id = postState.id;

  if (id) {
    axios.post('/api/posts/'+id, postObject).then(response => {
      console.log(response.data)
      dispatch(resetState());
      const location = history.location;
  
      // Listen for changes to the current location.
      const unlisten = history.listen((location) => {
        // location is an object like window.location
        console.log('pathname:::', location.pathname);
      });
  
      history.push('/');
      // window.location.reload();
      // return response;
  
    }).catch(err => {
      console.log('ERROR PUBLISHING POST:::', err);
      dispatch(handlePublishError());
    })
  } else {
    axios.post('/api/posts/', postObject).then(response => {
      console.log(response.data)
      dispatch(resetState());
      const location = history.location;
  
      // Listen for changes to the current location.
      const unlisten = history.listen((location) => {
        // location is an object like window.location
        console.log('pathname:::', location.pathname);
      });
  
      history.push('/');
      // window.location.reload();
      // return response;
  
    }).catch(err => {
      console.log('ERROR PUBLISHING POST:::', err);
      dispatch(handlePublishError());
    })
  }


}

