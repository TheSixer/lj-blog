import React from 'react';
/* eslint-disable no-console */
import Swiper from '@/components/carousel';
import Art from '@/types/article';
import { animateScroll } from 'react-scroll';
// import { connect } from 'react-redux';
// import { add, minus, asyncAdd } from '../../actions/counter';
import HomeArticle from '@/components/Article';
import { queryArticles } from '@/services/api';
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
  list: Art.SkeletonItem[];
  data: Art.SkeletonItem[];
  banners: Art.ArticleItem[];
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

export interface Index {
  props: IProps;
}

class HomePage extends React.Component<IProps, PageState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      banners: [],
      data: [...new Array(10)].map(() => ({ loading: true, data: null })),
      list: [],
    };
  }

  scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  getList = async () => {
    const { data } = await queryArticles();
    this.setState({
      banners: data.rows.slice(0, 5),
      list: data.rows.map((item: Art.ArticleItem) => ({
        loading: false,
        data: item,
      })),
    });
  };

  componentDidMount = () => {
    this.getList();
  };

  public render() {
    const { list, data, banners } = this.state;
    return (
      <div className="lj-blog-home">
        <Swiper data={banners} />

        <div className="lj-blog-home-article">
          <HomeArticle list={list.length ? list : data} />
        </div>
      </div>
    );
  }
}

export default HomePage;
