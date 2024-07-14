declare interface RequestProp {
  _id: string | any;
  connectionRequest: string | any;
  requestId: string | any;
  status: "Pending" | "Declined" | "Accepted" | "";
}

declare type CommunityType = {
  _id: string;
  ownerId: string;
  members: Array<string>;
  joinRequest: RequestProp[];
  invitationCode: string;
  communityName: string;
  communityDesc: string;
  communityProfile: string | object | any;
  joinOption: string;
  communitySlug: string;
  articles: any[];
  permissions: any[];
  isAdmin: Array<string>;
  communityType: string;
  hasCommunityCheck: boolean;
  createdAt: Date | string | any;
};

declare type StatusType = "pending" | "successful" | "failed" | "";

declare type CommunityReqBody = {
  communityName: string;
  communityDesc: string;
  communityType: string;
  communityProfile: string | object;
  joinOption: string;
  ownerId: string;
};

declare type CommentType = {
  _id: string;
  userId: string;
  articleId: string;
  userName: string;
  slugName: string;
  userProfile: string;
  desc: string;
  isVerified: boolean;
  likes: Array<string>;
  createdAt: Date | string | any;
  image: Array<object>;
};

declare type ArticleType = {
  _id: string;
  userId: string;
  userName: string;
  slugName: string;
  tag: string;
  userProfile: string;
  desc: string;
  image: Array<object>;
  video: object | any;
  isVerified: boolean;
  likes: Array<string>;
  comments: CommentType[];
  views: Array<string>;
  stars: Array<string>;
  createdAt: Date | string | any;
};

declare type ArticleStateProps = {
  articles: ArticleType[];
  current: ArticleType;
  user_articles: ArticleType[];
  fetching_status: StatusType;
  fetching_error: string;
  fetching_current_status: StatusType;
  fetching_current_error: string | any;
  creating_status: StatusType;
  creating_error: string | any;
  comment_status: StatusType;
  comment_error: string | any;
  comment_current_status: StatusType;
  comment_current_error: string | any;
};
