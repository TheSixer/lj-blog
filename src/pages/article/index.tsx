import * as React from 'react';
import { RouteProps } from 'react-router-dom';
// import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { markdownToHTML } from '@/transforms/markdown';
import { Image } from 'antd';
import './index.styl';

type PageState = {
  location: any;
};

type Props = RouteProps & PageState;

function ArriclePage(props: Props): React.ReactElement<Props> {
  const {
    location: { state },
  } = props;

  return (
    <div className="lj-blog-article">
      <h4 className="lj-blog-article-title">{state.title}</h4>
      <Image
        height={240}
        src={state.cover}
        preview={{
          src: state.cover,
        }}
      />
      <div className="lj-blog-article-content">
        <div
          className="markdown-html"
          // eslint-disable-next-line
          dangerouslySetInnerHTML={{
            __html: markdownToHTML(state.content),
          }}
        />
      </div>
    </div>
  );
}

export default ArriclePage;
