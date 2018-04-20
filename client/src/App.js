import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Header from "./components/Header";
import Saved from "./pages/Saved"


class App extends Component {
//determine page location and pass header appropriate wording
state = {
  location: "New York Times"
}


pageLocation = () => {
  var where;
  if ( window.location.pathname === "/") {
    where = "New York Times"
  } else if ( window.location.pathname === "/search") {
    where = "Search for Articles"
  } else {
    where = "Saved Articles"
  };
  this.setState({
    location: where
  })
};

componentDidMount () {
  this.pageLocation()
}


  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Header where = {this.state.location}/>
            <Switch>
              <Route path="/search" component={Search} />
              <Route path="/saved" component={Saved} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
