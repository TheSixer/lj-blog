import React from 'react';
/* eslint-disable no-console */
import Swiper from '@/components/carousel';
import Art from '@/types/article';
import { animateScroll } from 'react-scroll';
import { connect } from 'react-redux';
import * as actions from '@/actions/home';
import HomeArticle from '@/components/Article';
import './index.styl';
import { BackTop } from 'antd';

type PageStateProps = {
  home: {
    list: Art.ArticleItem[];
  };
};

type PageDispatchProps = {
  queryHomeArticles: (params: Art.QueryParams) => void;
};

type PageOwnProps = {
  list: Art.ArticleItem[];
};

type PageState = {
  data: Art.SkeletonItem[];
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

// export interface Index {
//   props: IProps;
// }

class HomePage extends React.Component<IProps, PageState> {
  private queryParams: Art.QueryParams;

  constructor(props: IProps) {
    super(props);

    this.state = {
      data: [...new Array(10)].map(() => ({ loading: true, data: null })),
    };
    this.queryParams = {
      start: 0,
      limit: 10,
    };
  }

  scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  componentDidMount = () => {
    this.loadData();
  };

  private loadData = () => {
    const { queryHomeArticles } = this.props;
    queryHomeArticles(this.queryParams);
  };

  public render() {
    const { data } = this.state;
    const { list } = this.props;
    const articles = list.map((item: Art.ArticleItem) => ({
      loading: false,
      data: item,
    }));
    return (
      <div className="lj-blog-home">
        <Swiper data={list.slice(0, 5)} />

        <div className="lj-blog-home-article">
          <HomeArticle list={list.length ? articles : data} />
        </div>
        <BackTop />
      </div>
    );
  }
}

export default connect((state: PageStateProps) => state.home, {
  ...actions,
})(HomePage);
