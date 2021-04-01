import React from 'react';
import './index.styl';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}

function App(props: Props): React.ReactElement<Props> {
  const { name, enthusiasmLevel = 1 } = props;

  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello
        {name + getExclamationMarks(enthusiasmLevel)}
      </div>
    </div>
  );
}

export default App;
