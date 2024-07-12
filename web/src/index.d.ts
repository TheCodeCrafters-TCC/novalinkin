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
