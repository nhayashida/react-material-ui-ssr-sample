import React, { ReactNode } from 'react';

interface Props {
  styles: string;
  markup: string;
  initState: string;
}

const Html = (props: Props): JSX.Element => {
  const { styles, markup, initState } = props;

  return (
    <html>
      <head>
        <style id="init-styles">${styles}</style>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: markup }} />
        <script id="init-state" type="text/plain" data-state={initState} />
        <script src="/echo.bundle.js" />
      </body>
    </html>
  );
};

export default Html;
