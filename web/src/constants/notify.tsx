import { Mia, Michael, Robert, firstUser } from "@/assets";

export const notdata = [
  {
    notifyType: "like",
    header: "John Doe and 6 others liked your article",
    body: "Update on my 100 days challenge on graphql. i’ve been able to work on 3 APIs and run integrations, fixed some bugs on the backend with type safety. It's been a good experience though...",
    seen: false,
    Images: [firstUser, Michael, Robert, Mia],
  },
  {
    notifyType: "comment",
    header: "John Doe and 6 others commented on your article",
    body: "Update on my 100 days challenge on graphql. i’ve been able to work on 3 APIs and run integrations, fixed some bugs on the backend with type safety. It's been a good experience though...",
    seen: true,
    Images: [firstUser, Michael, Robert, Mia],
  },
  {
    notifyType: "reply",
    header: "Jane Smith and 3 others replied to your comment",
    body: "Thanks for sharing your experience with GraphQL. I've been looking into type safety as well, and your insights are quite helpful. Keep up the good work!",
    seen: true,
    Images: [firstUser, Michael, Robert, Mia],
  },
  {
    notifyType: "reply",
    header: "Alice Johnson and 2 others replied to your comment",
    body: "Great progress on your challenge! I encountered similar issues with API integrations. Your tips on debugging were very useful.",
    seen: true,
    Images: [firstUser, Michael, Robert, Mia],
  },
  {
    notifyType: "reply",
    header: "Chris Lee and 4 others replied to your comment",
    body: "I appreciate your detailed updates on the 100 days challenge. They are motivating and provide practical advice on handling backend bugs.",
    seen: true,
    Images: [firstUser, Michael, Robert, Mia],
  },
];
