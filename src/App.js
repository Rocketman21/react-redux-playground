import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name={this.props.user.name} initialAge={23} changeUsername={() => this.props.setName('Max')}>
          testing children.
        </Header>
        <Content initialAge={23}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);