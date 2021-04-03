import * as React from 'react';
import { RouteProps } from 'react-router-dom';
// import ReactMarkdownWithHtml from 'react-markdown/with-html';
import { markdownToHTML } from '@/transforms/markdown';
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
      <div className="lj-blog-article-content">
        <div
          className="markdown-html"
          dangerouslySetInnerHTML={{
            __html: markdownToHTML(state.content),
          }}
        />
      </div>
    </div>
  );
}

export default ArriclePage;
