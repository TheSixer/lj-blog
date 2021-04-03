import * as React from 'react';
import { Element } from 'react-scroll';
import Header from './header';
import Footer from './footer';
import Background from './background';
import Main from './main';
import Aside from './aside';
import Right from './aside/right';
import './index.styl';

export type AsideMenu = {
  path: string;
  name: string;
  icon: string;
  routeName: string;
};

const asideMenu: AsideMenu[] = [
  {
    path: '/home',
    name: '首页',
    icon: 'icon-lj-blog-283zhome05',
    routeName: 'home',
  },
  {
    path: '/topic',
    name: '技术专题',
    icon: 'icon-lj-blog-289folder01',
    routeName: 'home',
  },
  {
    path: '/imagine',
    name: '异想天开',
    icon: 'icon-lj-blog-259send01',
    routeName: 'home',
  },
  {
    path: '/life',
    name: '生活游记',
    icon: 'icon-lj-blog-273route',
    routeName: 'home',
  },
  {
    path: '/about-me',
    name: '个人简介',
    icon: 'icon-lj-blog-287user06',
    routeName: 'home',
  },
];

const LayoutComponent = ({ children }: any) => {
  return (
    <Element name="lj-body" className="lj-layout">
      <Background />
      <Header />
      <div className="lj-layout-container">
        <Aside nav={asideMenu} />
        <Main>{children}</Main>
        <Right />
      </div>
      <Footer />
    </Element>
  );
};

export default LayoutComponent;
