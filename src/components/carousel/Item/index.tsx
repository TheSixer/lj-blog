import React from 'react';
import Art from '@/types/article';
import './index.styl';

type IProps = {
  data: Art.ArticleItem;
};

function SwiperItem({ data }: IProps): React.ReactElement {
  return (
    <div className="lj-blog-swiper-item">
      <p>{data.title}</p>
    </div>
  );
}

export default SwiperItem;
