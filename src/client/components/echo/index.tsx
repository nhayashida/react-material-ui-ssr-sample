import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const elem = document.getElementById('message');
const message = elem ? elem.getAttribute('data-message') || '' : '';

ReactDOM.hydrate(<App message={message} />, document.getElementById('app'));
