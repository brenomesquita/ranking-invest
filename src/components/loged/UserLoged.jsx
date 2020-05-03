import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class UserLoged extends Component {
  constructor(props){
    super(props)
    this.state={
      redirect: false
    }
  }
  handleOnClick = () => {
    this.setState({redirect: true});
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return (
      <div>
        loged in
        <button onClick={this.handleOnClick}>log out</button>
      </div>
    )
  }
}
