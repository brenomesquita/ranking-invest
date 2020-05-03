import React from 'react';
import LoginRender from "./components/login/LoginRender.jsx";
import HomePage from "./components/homePage/HomePage";
import {BrowserRouter, Route , Switch} from "react-router-dom";
import UserLoged from "./components/loged/UserLoged.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/homePage" component={HomePage} />
          <Route exact path="/loginRegister" component={LoginRender} />
          <Route exact path="/loged" component={UserLoged} />
        </Switch>  
      </BrowserRouter>
      
    </div>
  );
}

export default App;
