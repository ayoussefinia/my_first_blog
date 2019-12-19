import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import SecondHeader from "./components/SecondaryHeader/SecondaryHeader";
import SideDrawer from './components/Nav/SideDrawer/SideDrawer';

function App() {
  return (
    <Router>
      <div>
        <SideDrawer/>
        <Nav />
        <SecondHeader/>
        <Body/>
        
        {/* <Body/> */}
        <Switch>
          <Route exact path="/" component={Body} />
          {/* <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
