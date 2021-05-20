import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Articles from "./pages/Articles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div class="w-screen h-screen bg-gray-50 p-4">
      <Router>
        <Navbar />
        <div class="mt-6">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
