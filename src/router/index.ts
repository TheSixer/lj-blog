import * as React from 'react';
import Home from '../pages/home';
import Article from '../pages/article';
import Markdown from '../pages/markdown';

export interface RouteItem {
  path: string;
  routeName: string;
  component: React.ReactNode;
  exact?: boolean;
  routes?: RouteItem;
}
const menu = [
  {
    path: '/home',
    routeName: 'home',
    component: Home,
    exact: true,
  },
  {
    path: '/article',
    routeName: 'list',
    component: Article,
  },
  {
    path: '/markdown',
    routeName: 'markdown',
    component: Markdown,
  },
];

export default menu;
