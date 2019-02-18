import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const elem = document.getElementById('init-state');
const initState = JSON.parse((elem && elem.getAttribute('data-state')) || '{}');

ReactDOM.hydrate(<App {...initState} />, document.getElementById('app'));
