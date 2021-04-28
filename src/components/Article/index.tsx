import React from 'react';
import { Skeleton } from 'antd';
import Art from '@/types/article';
import ArticleItem from './ArticleItem';
import './index.styl';

type IProps = {
  list: Art.SkeletonItem[];
};

function HomeArticle({ list }: IProps): React.ReactElement {
  return (
    <div className="lj-blog-home-article-list">
      {list.map((opt: Art.SkeletonItem, index: number) => (
        <Skeleton avatar title={false} loading={opt.loading} key={index} active>
          {opt.data ? <ArticleItem data={opt.data} /> : null}
        </Skeleton>
      ))}
    </div>
  );
}

export default HomeArticle;
