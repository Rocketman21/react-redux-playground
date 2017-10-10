import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge
    }
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 1
    });
  }

  onChangeUsername() {
    this.props.changeUsername();
  }

  render() {
    console.log(logo);
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        Name is {this.props.name}. He is {this.state.age} old. Children: {this.props.children}
        <button onClick={() => this.onMakeOlder()}>Make him older</button>
        <button onClick={() => this.onChangeUsername()}>Change username</button>
      </header>
    );
  }
}

export default Header;