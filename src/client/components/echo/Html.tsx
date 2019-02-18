import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  initState: string;
}

const Html: React.FC<Props> = (props: Props): JSX.Element => {
  const { children, initState } = props;

  return (
    <html>
      <body>
        <div id="app">{children}</div>
        <script id="init-state" type="text/plain" data-state={initState} />
        <script src="/echo.bundle.js" />
      </body>
    </html>
  );
};

export default Html;
