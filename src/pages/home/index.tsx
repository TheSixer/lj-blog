/* eslint-disable no-console */
import { queryArticles } from '@/services/api';
import React from 'react';
// import { connect } from 'react-redux';
import { animateScroll } from 'react-scroll';
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
  list: any;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

export interface Index {
  props: IProps;
}

class HomePage extends React.Component<IProps, PageState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      list: [],
    };
  }

  scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  getList = async () => {
    const { data } = await queryArticles();
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      list: data.rows,
    });
  };

  componentDidMount = () => {
    this.getList();
  };

  public render() {
    const { list } = this.state;
    return (
      <div className="hello">
        <div className="greeting">
          {/* <Link activeClass="active" to="rel1" spy smooth duration={250}>
            rel 1
          </Link> */}
          {list.map((opt: any, index: number) => (
            <div key={index}>
              <h4>{opt.title}</h4>
              <p>{opt.introduction}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomePage;
