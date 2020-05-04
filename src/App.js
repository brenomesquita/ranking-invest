import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import LoginRender from "./components/login/LoginRender";
import HomePage from "./components/homePage/HomePage";
import ProfileConsultor from './componentes/ProfileConsultor';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/loginRegister" component={LoginRender} />
          <Route exact path="/loged" component={Dashboard} />
          <Route exact path="/profile/:id" component={ProfileConsultor} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
