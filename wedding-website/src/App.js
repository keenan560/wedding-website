import "./App.css";
import Banner from "./components/Banner";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Info />
            <Navbar />
            <Banner />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
