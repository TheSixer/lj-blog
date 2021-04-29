import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { AsideMenu } from '..';
import './nav.styl';

interface Props {
  nav: AsideMenu;
}

const NavComponent: React.FC<Props> = (props: Props) => {
  const { nav } = props;
  return (
    <NavLink to={nav.path} className="lj-aside-nav" activeClassName="selected">
      <i className={`icon iconfont ${nav.icon}`} />
      <span>{nav.name}</span>
    </NavLink>
  );
};

export default NavComponent;
