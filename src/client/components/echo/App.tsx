import React, { PureComponent } from 'react';

interface Props {
  message: string;
}

export default class App extends PureComponent<Props> {
  render() {
    return <div>{this.props.message}</div>;
  }
}
