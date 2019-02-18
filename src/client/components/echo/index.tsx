import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import App from './App';

const elem = document.getElementById('init-state');
const initState = JSON.parse((elem && elem.getAttribute('data-state')) || '{}');

const sheetsManager = new Map();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
const generateClassName = createGenerateClassName();

ReactDOM.hydrate(
  <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
      <App {...initState} />
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('app'),
);
