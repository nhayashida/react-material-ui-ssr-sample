import React, { PureComponent, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  message: string;
}

export default class Html extends PureComponent<Props> {
  render() {
    return (
      <html>
        <body>
          <div id="app">{this.props.children}</div>
          <script id="message" type="text/plain" data-message={this.props.message} />
          <script src="/echo.bundle.js" />
        </body>
      </html>
    );
  }
}
