import React from 'react';

interface Props {
  message: string;
}

const App = (props: Props): JSX.Element => {
  return <div>{props.message}</div>;
};

export default App;
