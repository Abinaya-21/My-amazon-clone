import React,{useEffect} from "react";
import {BrowserRouter,Route,Switch} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./auth/Login";
import {useStateValue} from './api/StateProvider';
import {auth} from './auth/Firebase';
import Checkout from "./components/Checkout";


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
