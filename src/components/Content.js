import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge
    }
  }

  onInputChange(event) {
    this.setState({
      age: event.target.value
    });
  }

  render() {
    return (
      <div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          { console.log('adasd')  } 
        </p>
        <p>Current age is {this.state.age}</p>
        <input type="text" value={this.state.age} onChange={(event) => this.onInputChange(event)} />
      </div>
    );
  }
}

export default Content;