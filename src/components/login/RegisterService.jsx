import React, { Component } from 'react';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = formErrors => {
  let valid = true;

  Object.values(formErrors).forEach(val=>val.length>0&&(valid===false));
  return valid
}

export default class RegisterService extends Component {
  constructor(props){
    super(props)

    this.state={
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        test: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }
    };
  }

  handleSubmit = (accountProps) => {
    accountProps.preventDefault();
    if(formValid(this.state.formErrors)){
      console.log(`${this.state.firstName}`)
    }else{
      console.error("error")
    }
  };

  handleChange = (events) => {
    events.preventDefault();
    const { name, value } = events.target;
    let formErros = this.state.formErrors;
    
    switch(name){
      case "firstName":
        formErros.firstName = value.length<4? "minimuim 3 characters required" : "";
      break;
      case "lastName":
        formErros.lastName = value.length<4? "minimuim 3 characters required" : "";
      break;
      case "email":
        formErros.email = emailRegex.test(value)? "" : "Add an valida email";
      break;
      case "password":
        formErros.password = value.length<9? "minimuim 8 numbers required" : "";
      break;
    }

    this.setState({formErros, [name]:value}, ()=>console.log(this.state.formErrors))
  }

  handleInputChange = (test, clas) => {
    if(clas==="firstName"){
      return <span className="errorMessage">{test.firstName}</span>
    }else if(clas==="lastName"){
      return <span className="errorMessage">{test.lastName}</span>
    }else if(clas==="email"){
      return <span className="errorMessage">{test.email}</span>
    }else if(clas==="password"){
      return <span className="errorMessage">{test.password}</span>
    }
    
  };

  creatInputs(classText="sem prop", text="sem prop", typeInput="text"){

    const { formErrors } = this.state;
    return(
      <div className={classText}>
        <label htmlFor={classText}>{ text }</label>
        <input type={typeInput}
        className=""
        name={classText}
        noValidate
        onChange={this.handleChange}
        />
        {this.handleInputChange(formErrors, classText)}
      </div>
    )
  }

  render() {
    return (
      <div id="register">
        <form onSubmit={this.handleSubmit} noValidate>
            {this.creatInputs("firstName", "First Name")}
          {this.creatInputs("lastName", "Last Name")}
          {this.creatInputs("email", "Email", "email")}
          {this.creatInputs("password", "Password", "password")}
          {this.creatInputs("checkbox", "I agree with terms & condition", "checkbox")}
          <div className="createAccount">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    )
  }
}
