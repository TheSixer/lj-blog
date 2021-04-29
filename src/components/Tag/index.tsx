import React from 'react';
import './index.styl';

type IProps = {
  type: 'primary' | 'danger' | 'warning' | 'success' | 'default' | string;
  text: string;
  // eslint-disable-next-line react/require-default-props
  className?: string;
};

function Tag({
  text,
  type,
  className = '',
}: IProps): React.ReactElement<IProps> {
  return <span className={`lj-blog-tag ${type} ${className}`}>{text}</span>;
}

export default Tag;
