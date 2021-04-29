declare namespace Art {
  interface QueryParams {
    kw?: string;
    type?: number;
    tags?: string;
    start?: number;
    limit?: 10 | number;
  }

  interface ArticleItem {
    id: number;
    title: string;
    content: string;
    cover: any;
    introduction: string;
    type: number;
    tags: string;
    images: string;
    createTime: number;
    editTime: number;
    viewCount: number;
    likeCount: number;
    commentCount: number;
  }

  interface SkeletonItem {
    loading: boolean;
    data: ArticleItem | null;
  }
}

export = Art;
export as namespace Art;
