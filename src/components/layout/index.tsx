import * as React from 'react';
import routes from '@router';
import Header from './header';
import Footer from './footer';
import Background from './background';
import Main from './main';
import Aside from './aside';
import './index.styl';

const LayoutComponent = ({ children }: any) => {
  return (
    <div className="lj-layout">
      <Background />
      <Header />
      <div className="lj-layout-container">
        <Aside nav={routes} />
        <Main>{children}</Main>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutComponent;
