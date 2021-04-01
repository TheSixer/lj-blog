import * as React from 'react';
import './index.styl';

interface Props {
  children: () => React.ReactNode;
}

const ContainerComponent: React.FC<Props> = ({ children }: Props) => {
  return <section className="lj-container">{children}</section>;
};

export default ContainerComponent;
