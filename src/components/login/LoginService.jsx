import React, { Component } from 'react';

export default class LoginService extends Component {
  creatInputs(classText="sem prop", text="sem prop", typeInput="text"){
    return(
      <div className={classText}>
        <label htmlFor={classText}>{ text }</label>
        <input type={typeInput}
        className=""
        name={classText}
        noValidate
        />
      </div>
    )
  }
  render() {
    return (
      <div id="login">
        <form onSubmit={this.handleSubmit} noValidate>
          {this.creatInputs("email", "Email", "email")}
          {this.creatInputs("password", "Password", "password")}
          <div className="createAccount">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    )
  }
}
