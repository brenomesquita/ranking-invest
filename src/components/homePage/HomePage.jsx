import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class HomePage extends Component {
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
      return <Redirect push to="/loginRegister" />;
    }
    return (
      <div>
        <h1>Ranking page</h1>
        <button onClick={this.handleOnClick}>clik</button>
      </div>
    )
  }
}
