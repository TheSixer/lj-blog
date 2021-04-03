import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AsideMenu } from '..';
import './nav.styl';

interface Props {
  nav: AsideMenu;
}

const NavComponent: React.FC<Props> = ({ nav }: Props) => {
  return (
    <div className="lj-aside-nav">
      <span className={`icon iconfont ${nav.icon}`} />
      <NavLink to={nav.path} activeClassName="selected">
        {nav.name}
      </NavLink>
    </div>
  );
};

export default NavComponent;
