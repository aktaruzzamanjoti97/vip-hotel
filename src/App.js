import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Booking from "./components/Booking/Booking";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Destination from "./components/Destination/Destination";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <div className="container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />

        <Switch>
  
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/booking/:ticketId">
            <Booking />
          </PrivateRoute>

          <PrivateRoute path="/destination/:showId">
            <Destination />
          </PrivateRoute>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      </UserContext.Provider>
    </div>
  );
}

export default App;
