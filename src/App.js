import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";
import Courses from "./Components/Courses/Courses";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Error from "./Components/Error/Error";
import Details from "./Components/Details/Details";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/About">
            <About></About>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route path="/Courses">
            <Courses></Courses>
          </Route>
          <Route path="/Details">
            <Details></Details>
          </Route>
          <Route path="">
            <Error></Error>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
