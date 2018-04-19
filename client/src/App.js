import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Header from "./components/Header";
import Saved from "./pages/Saved"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Router>
          <div>
            <Switch>
              <Route exact path="/search" component={Search} />
              <Route exact path="/" component={Search} />
              <Route exact path="/saved" component={Saved} />
              
            </Switch>


          </div>
        </Router>
      </div>
    );
  }
}

export default App;
