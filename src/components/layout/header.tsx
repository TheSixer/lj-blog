import * as React from 'react';
import './header.styl';

const HeaderComponent: React.FC = () => {
  return (
    <div className="lj-header">
      <div className="lj-header-container">
        <p className="lj-header-container-title">
          L.J.Zhang 的博客
          <p className="lj-header-container-motto">
            男儿应带吴钩，挥斥猛志及四方
          </p>
        </p>
      </div>
    </div>
  );
};

export default HeaderComponent;
