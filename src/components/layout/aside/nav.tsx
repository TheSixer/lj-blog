import * as React from 'react';
import { RouteItem } from '@router';
import { NavLink } from 'react-router-dom';
import './nav.styl';

interface Props {
  nav: RouteItem;
}

const NavComponent: React.FC<Props> = ({ nav }: Props) => {
  return (
    <div className="lj-aside-nav">
      <NavLink to={nav.path} activeClassName="selected">
        {nav.routeName}
      </NavLink>
    </div>
  );
};

export default NavComponent;
