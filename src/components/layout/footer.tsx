import * as React from 'react';
import './footer.styl';

const FooterComponent: React.FC = () => {
  return (
    <div className="lj-footer">
      <div className="lj-footer-container">
        <p className="lj-footer-container-item">
          <a href="https://github.com/TheSixer">Github: TheSixer</a>
        </p>
        <p>
          <span className="lj-footer-container-divider">&nbsp;|&nbsp;</span>
        </p>
        <p className="lj-footer-container-item">
          <a href="https://github.com/TheSixer/lj-blog">Source Code</a>
        </p>
        <p>
          <span className="lj-footer-container-divider">&nbsp;|&nbsp;</span>
        </p>
        <p className="lj-footer-container-item">
          <a href="https://beian.miit.gov.cn">湘ICP备2021006020号-1</a>
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
