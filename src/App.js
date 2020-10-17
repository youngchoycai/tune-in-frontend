import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Preview from "./components/Preview";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        
            <Route
              exact
              path={"/"}
              component = {Home}
            />

            <Route
              path={'/partytime/userID=:userID/userName=:userName/loggedIn=:loggedIn'}
              component = {Dashboard}
            />

             <Route
              exact
              path={"/preview"}
              component = {Preview}
            />
         
      </div>
    );
  }
}