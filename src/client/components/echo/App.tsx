import React, { useEffect } from 'react';

interface Props {
  message: string;
}

const App: React.FC<Props> = (props: Props): JSX.Element => {
  useEffect(() => {
    // Remove elements for server-side rendering
    const elem = document.getElementById('init-state');
    if (elem && elem.parentNode) {
      elem.parentNode.removeChild(elem);
    }
  });

  return <div>{props.message}</div>;
};

export default App;
