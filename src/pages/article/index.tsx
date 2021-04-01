import * as React from 'react';
import './index.styl';

interface Props {
  articleId: number;
}

function ArriclePage(props: Props): React.ReactElement<Props> {
  const { articleId } = props;

  return (
    <div className="hello">
      <div className="greeting">
        <span>article page</span>
        <span>{articleId}</span>
      </div>
    </div>
  );
}

export default ArriclePage;
