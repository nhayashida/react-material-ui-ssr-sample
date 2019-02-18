import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { Request, Response } from 'express';
import { SheetsRegistry } from 'jss';
import React from 'react';
import { renderToString } from 'react-dom/server';
import JssProvider from 'react-jss/lib/JssProvider';
import App from '../../client/components/echo/App';
import Html from '../../client/components/echo/Html';

const echo = (req: Request, res: Response) => {
  const message = req.query['message'] || '';
  const initState = { message };

  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
  });
  const generateClassName = createGenerateClassName();

  const markup = renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <App {...initState} />
      </MuiThemeProvider>
    </JssProvider>,
  );
  const styles = sheetsRegistry.toString();

  res.send(
    renderToString(<Html markup={markup} styles={styles} initState={JSON.stringify(initState)} />),
  );
};

export default echo;
