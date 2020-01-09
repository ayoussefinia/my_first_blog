import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";


import Nav from "./components/Nav/Nav";
import SecondHeader from "./components/SecondaryHeader/SecondaryHeader";
import SideDrawer from './components/Nav/SideDrawer/SideDrawer';
import Body from "./components/Body/Body";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import MakeAPost from "./components/Posts/MakeAPost/MakeAPost";
import Footer from "./components/Footer/Footer";

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
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
            <SideDrawer/>
            <Nav />
            <SecondHeader/>
          <Switch>

            <Route exact path="/" component={Body} />
            {/* <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route component={NoMatch} /> */}

            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/makePost" component={MakeAPost} />
          </Switch>

            
            <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
