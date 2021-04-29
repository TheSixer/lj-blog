import React, { createElement, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Art from '@/types/article';
import './index.styl';
import Tag from '@/components/Tag';
import { Image, Tooltip } from 'antd';
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
  EyeOutlined,
} from '@ant-design/icons';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

type IProps = {
  data: Art.ArticleItem;
};

function HomeArticleItem({ data }: IProps): React.ReactElement {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState('');

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };
  const actions = [
    <Tooltip
      key="comment-basic-like"
      title="Like"
      overlayClassName="actions-item"
    >
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip
      key="comment-basic-dislike"
      title="Dislike"
      overlayClassName="actions-item"
    >
      <span onClick={dislike}>
        {React.createElement(
          action === 'disliked' ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <Tooltip
      key="comment-basic-view"
      title="View"
      overlayClassName="actions-item"
    >
      <span onClick={dislike}>
        {React.createElement(EyeOutlined)}
        <span className="comment-action">{data.viewCount}</span>
      </span>
    </Tooltip>,
    <Tooltip
      key="comment-basic-date"
      title={dayjs(data.editTime * 1000).format('YYYY-MM-DD HH:mm:ss')}
    >
      <span>{dayjs(data.editTime * 1000).fromNow()}</span>
    </Tooltip>,
    <span key="comment-basic-reply-to">{data.type}</span>,
  ];
  return (
    <NavLink
      className="lj-blog-home-list-article-item"
      to={{ pathname: `/detail/${data.id}`, state: data }}
      activeClassName="selected"
    >
      <div className="lj-blog-home-list-article-item-media">
        <Image width={180} height="100%" src={data.cover} preview={false} />
        <Tag
          className="lj-blog-home-list-article-item-media-tag"
          type="success"
          text="原创"
        />
      </div>
      <div className="lj-blog-home-list-article-item-content">
        <h5 className="lj-blog-home-list-article-item-content-title">
          {data.title}
        </h5>
        <p className="lj-blog-home-list-article-item-content-desc">
          {data.introduction}
        </p>

        <div className="lj-blog-home-list-article-item-content-actions">
          {actions.map((item: React.ReactElement) => item)}
        </div>
      </div>
    </NavLink>
  );
}

export default HomeArticleItem;
