import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Story from "./components/Story";
import Photos from "./components/Photos";
import Party from "./components/Party";
import Questions from "./components/Questions";
import Travel from "./components/Travel";
import Registry from "./components/Registry";
import Rsvp from "./components/Rsvp";
import HeadCount from "./components/HeadCount";
import Booking from "./components/Booking";
import PayPal from "./components/PayPal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/our-story">
            <Story />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/party">
            <Party />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route path="/travel">
            <Travel />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/rsvp">
            <Rsvp />
          </Route>
          <Route path="/guests">
            <HeadCount />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/donate">
            <PayPal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
