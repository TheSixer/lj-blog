import React from 'react';
// import { connect } from 'react-redux';
import { Link, animateScroll } from 'react-scroll';
// import { add, minus, asyncAdd } from '../../actions/counter';
import './index.styl';

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  addd: () => void;
  dec: () => void;
  asyncAddd: () => void;
};

type PageOwnProps = {
  num: number;
};

type PageState = {
  id: number;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

export interface Index {
  props: IProps;
}

class HomePage extends React.Component<IProps, PageState> {
  scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  public render() {
    return (
      <div className="hello">
        <div className="greeting">
          <Link activeClass="active" to="rel1" spy smooth duration={250}>
            rel 1
          </Link>
          <p>
            <span>Hello, World</span>
          </p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
          <p>this is home page.</p>
        </div>
      </div>
    );
  }
}

export default HomePage;
