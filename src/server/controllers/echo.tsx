import { Request, Response } from 'express';
import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import App from '../../client/components/echo/App';
import Html from '../../client/components/echo/Html';

const echo = (req: Request, res: Response) => {
  const message = req.query['message'] || '';

  const initState = { message };
  renderToNodeStream(
    <Html initState={JSON.stringify(initState)}>
      <App {...initState} />
    </Html>,
  ).pipe(res);
};

export default echo;
