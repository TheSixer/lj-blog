import * as React from 'react';
import './main.styl';

interface Props {
  children: () => React.ReactNode;
}

const ContainerComponent: React.FC<Props> = ({ children }: Props) => {
  return <section className="lj-main">{children}</section>;
};

export default ContainerComponent;
