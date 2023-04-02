import React from "react";
import {  useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PostView from "./PostView/PostView";
import LandingPage from "./LandingPage/LandingPage";
import Details from "./LandingPage/Details";
import Header from './LandingPage/Header';
import Error from "./PostView/error";
function App() {

  useEffect(() => {
    fetch("http://localhost:8000/postview")
      .then((res) => res.json())
  }, []);
  return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path="/">
            <LandingPage/>
          </Route>
          <Route exact path="/PostView">
            <PostView/>
          </Route>
          <Route exact path="/Details">
            <Details/>
          </Route>
          <Route exact path="*">
            <Error/>
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
