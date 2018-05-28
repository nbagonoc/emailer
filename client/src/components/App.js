import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// Components
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import Survey from "./surveys/Survey";

class App extends Component {
  // LIFECYCLES
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={Survey} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
