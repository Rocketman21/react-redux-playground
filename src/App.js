import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name={"Azaza"} initialAge={23}>
          testing children.
        </Header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          { console.log('adasd')  } 
        </p>
        
      </div>
    );
  }
}

export default App;
