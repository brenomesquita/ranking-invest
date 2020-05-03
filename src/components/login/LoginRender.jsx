import React, { Component } from 'react';
import RegisterService from './RegisterService.jsx';
import Avatar from './img/Avatar.jsx';
import Login from './LoginService.jsx';
import './loginRegister.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      register: "register",
      login: "login",
    }
  };
  
  login=(event)=>{
    if(event.login=== "register"){
      this.setState({
        register: "register",
        login: "login",
      })
    }
  }

  register=(event)=>{
    if(event.register=== "register"){
      this.setState({
        register: "login",
        login: "register",
      })
    }
  }

  form(val, text, lado, botao){
    return(
      <div className={`${lado}`}>
        <div className="form-wrapper">
        <div className="button-box">
          <div className={botao}>
            <button type="button" className={this.state.login} onClick={()=>this.login(this.state)} className="toogle-btn">Log In</button>
            <button type="button" className={this.state.register} onClick={()=>this.register(this.state)} className="toogle-btn">Register</button>
          </div>
        </div>
        <Avatar className="img" />
        <h1>{text}</h1>
        {val}
        </div>
      </div>
    )
  }
  render(){
    return (
    <div className="wrapper">
      {this.form(<Login />, "Login", `${this.state.login}`, "btn" )}
      {this.form(<RegisterService />, "Creat Account", `${this.state.register}`, "btn-change" )}
    </div>
  );
  }
}