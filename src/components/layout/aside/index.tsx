import * as React from 'react';
import Nav from './nav';
import './index.styl';
import { AsideMenu } from '..';

interface Props {
  nav: AsideMenu[];
}

const LayoutComponent: React.FC<Props> = ({ nav }: Props) => {
  return (
    <aside className="lj-aside">
      <div className="lj-aside-list">
        {nav.map((data: AsideMenu, index: number) => (
          <Nav key={index} nav={data} />
        ))}
      </div>
    </aside>
  );
};

export default LayoutComponent;
