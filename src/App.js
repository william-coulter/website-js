import About from "./pages/About";
import Home from "./pages/Home";
import Article from "./pages/Article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div class="flex w-screen h-screen p-4 bg-solarized-dark-base02 overflow-auto">
      <Router>
        <div class="w-6/12 h-2/4 mx-auto my-auto">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/articles/:article">
              <Article />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
