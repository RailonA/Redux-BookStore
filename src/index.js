import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './styles/index.css';
import App from './app';
import rootReducer from './reducers/index';
import reportWebVitals from './reportWebVitals';

const bookReducer = [
  {
    id: Math.random().toFixed(2),
    title: 'The Alchemist ',
    category: 'Kids',
  },

  {
    id: Math.random().toFixed(2),
    title: 'The Ruby Programming Language',
    category: 'Learning',
  },

  {
    id: Math.random().toFixed(2),
    title: 'The Real Economy of Zaire',
    category: 'Learning',
  },
];

const intailState = { bookReducer };
const store = createStore(rootReducer, intailState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
