import React from 'react';
import { Carousel } from 'antd';
import Art from '@/types/article';
import './index.styl';
import Item from './Item';

type IProps = {
  data: Art.ArticleItem[];
};

function Swiper({ data }: IProps): React.ReactElement {
  return (
    <div className="lj-blog-swiper">
      <Carousel dots={{ className: 'lj-blog-swiper-dots' }} autoplay>
        {data.map((opt: Art.ArticleItem) => (
          <Item data={opt} key={`banner-item-${opt.id}`} />
        ))}
      </Carousel>
    </div>
  );
}

export default Swiper;
