import React from 'react';
import Art from '@/types/article';
import { Image } from 'antd';
import './index.styl';
import { NavLink } from 'react-router-dom';

type IProps = {
  data: Art.ArticleItem;
};

function SwiperItem({ data }: IProps): React.ReactElement {
  return (
    <div className="lj-blog-swiper-item">
      <NavLink
        className="lj-blog-swiper-item-link"
        to={{ pathname: `/detail/${data.id}`, state: data }}
        activeClassName="selected"
      >
        <Image height="100%" src={data.cover} preview={false} />
        <p>{data.title}</p>
      </NavLink>
    </div>
  );
}

export default SwiperItem;
