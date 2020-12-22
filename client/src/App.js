import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Authentication
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Redux
import { Provider } from "react-redux";
import store from "./store";

//Components & Pages
import MyPosts from "./components/Posts/MyPosts/MyPosts"
import NoMatch from './pages/NoMatch';
import Home from './pages/Home/Home';
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import MakeAPost from "./pages/MakeAPost/MakeAPost";
import PreviewPost from "./components/Posts/PreviewPost/PreviewPost"
import CommentSharePost from "./components/Posts/CommentSharePost/CommentSharePost";
import EditPost from "./components/Posts/EditPost/EditPost";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

// Check for expired token
const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div >
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/post/:id" component={CommentSharePost} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/makePost" component={MakeAPost} />
            <PrivateRoute exact path="/myPosts" component={MyPosts} />
            <PrivateRoute exact path="/editPost" component={EditPost} />
            <PrivateRoute exact path="/preview" component={PreviewPost} />
            <Route path='/*' component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
