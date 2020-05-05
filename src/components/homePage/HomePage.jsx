import React, { Component } from 'react';
import './homePage.css';
import Rankcreator from '../ranking/Rankcreator';
import LoginRender from '../login/LoginRender';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuChecked: false,
    };
  }

  handleMenu = () => {
    this.setState({
      menuChecked: !this.state.menuChecked,
    });    
  };

  render() {
    if (!this.state.menuChecked) {
      return (
        <div className="ranking-container">
        <label htmlFor="menu-hamburguer">
          <h1 className="login-texto">Login</h1>
          <input id="menu-hamburguer" type="button" onClick={this.handleMenu} />
          <div className="menu">
            <span className="hamburguer"></span>
          </div>
        </label>
        <div className="rank-container">
          <Rankcreator />
        </div>
      </div>
      )
    }
    return (
      <div className="ranking-container">
        <label htmlFor="menu-hamburguer" className="pointer">
          <h1 className="login-texto">Login</h1>
          <input id="menu-hamburguer" type="button" onClick={this.handleMenu} />
          <div className="login-x">
            <span className="x"></span>
          </div>
        </label>
        <div>
          <LoginRender />
        </div>
      </div>
    );
  }
}
