import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Story from "./components/Story";
import Photos from "./components/Photos";
import Party from "./components/Party";
import Questions from "./components/Questions";
import Travel from "./components/Travel";
import Things from "./components/Things";
import Registry from "./components/Registry";
import Rsvp from "./components/Rsvp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Route path="/things-to-do">
            <Things />
          </Route>
          <Route path="/registry">
            <Registry />
          </Route>
          <Route path="/rsvp">
            <Rsvp />
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
