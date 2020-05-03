import React from 'react';
import Dashboard from './dashboard/Dashboard';
import LoginService from "./components/login/LoginService";
import RegisterService from "./components/login/RegisterService";
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route , Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginService} />
          <Route exact path="/register" component={RegisterService} />
          <Route exact path="/loged" component={Dashboard} />
        </Switch>  
      </BrowserRouter>
    </div>
  )
}     


export default App;
