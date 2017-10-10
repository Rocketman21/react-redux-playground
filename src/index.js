import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const mathReducer = (state = { result: 1, lastValues: [] }, action) => {
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    case 'SUBTRACT':
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload]
      };
      break;
    default:
  }

  return state;
};

const userReducer = (state = { name: "Azaza1", age: 20 }, action) => {
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload
      };
      break;
    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload
      };
      break;
    default:
  }

  return state;
};

const myLogger = (store) => (next) => (action) => {
  console.log('Logged Action: ', action);
  next(action);
};

// createStore(reducer, initialState, middleware)
const store = createStore(
  combineReducers({
    math: mathReducer, 
    user: userReducer
  }), 
  {}, 
  applyMiddleware(myLogger)
);

store.subscribe(() => {
  console.log('Store updated:', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
