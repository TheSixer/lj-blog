import * as React from 'react';
import { RouteItem } from 'router';
import Nav from './nav';
import './index.styl';

interface Props {
  nav: RouteItem[];
}

const LayoutComponent: React.FC<Props> = ({ nav }: Props) => {
  return (
    <aside className="lj-aside">
      <div className="lj-aside-list">
        {nav.map((data: RouteItem, index: number) => (
          <Nav key={index} nav={data} />
        ))}
      </div>
    </aside>
  );
};

export default LayoutComponent;
