import React from 'react';
import './index.styl';

type IProps = {
  type: 'primary' | 'danger' | 'warning' | 'success' | 'default' | string;
  text: string;
};

function Tag({ text, type }: IProps): React.ReactElement<IProps> {
  return <span className={`lj-blog-tag ${type}`}>{text}</span>;
}

export default Tag;
