import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  message: string;
}

const Html = (props: Props): JSX.Element => {
  const { children, message } = props;

  return (
    <html>
      <body>
        <div id="app">{children}</div>
        <script id="message" type="text/plain" data-message={message} />
        <script src="/echo.bundle.js" />
      </body>
    </html>
  );
};

export default Html;
