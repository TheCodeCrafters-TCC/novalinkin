import { createSlice } from "@reduxjs/toolkit";
import {
  commentOnArticle,
  commentOnCurrentArticle,
  deleteArticle,
  getArticle,
  getArticles,
  likeArticle,
  likeComment,
  likeCurrentArticle,
  shareArticle,
} from "./thunks/article";
import { onToast } from "@/lib/components/ToastContainer";

const initialState: ArticleStateProps = {
  articles: [],
  current: {
    _id: "",
    userId: "",
    userName: "",
    slugName: "",
    tag: "",
    userProfile: "",
    desc: "",
    image: [],
    video: "",
    isVerified: false,
    likes: [],
    comments: [],
    views: [],
    stars: [],
    createdAt: "",
  },
  user_articles: [],
  fetching_status: "",
  fetching_error: "",
  fetching_current_status: "",
  fetching_current_error: "",
  creating_status: "",
  creating_error: "",
  comment_status: "",
  comment_error: "",
  comment_current_status: "",
  comment_current_error: "",
};

const ArticleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getArticles.pending, (state) => {
      return { ...state, fetching_status: "pending" };
    });
    builder.addCase(getArticles.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_status: "successful",
        articles: action.payload,
      };
    });
    builder.addCase(getArticles.rejected, (state: any, action) => {
      return {
        ...state,
        fetching_status: "failed",
        fetching_error: action.payload,
      };
    });
    builder.addCase(shareArticle.pending, (state, action) => {
      return { ...state, creating_status: "pending" };
    });
    builder.addCase(shareArticle.fulfilled, (state, action) => {
      onToast("success", "Your article has been shared.");
      const newArticle = action.payload;
      const updatedArticles = [newArticle, ...state.articles];
      return {
        ...state,
        creating_status: "successful",
        articles: updatedArticles,
      };
    });
    builder.addCase(shareArticle.rejected, (state, action) => {
      return {
        ...state,
        creating_error: action.payload,
        creating_status: "failed",
      };
    });
    builder.addCase(getArticle.pending, (state) => {
      return { ...state, fetching_current_status: "pending" };
    });
    builder.addCase(getArticle.fulfilled, (state, action) => {
      return {
        ...state,
        fetching_current_status: "successful",
        current: action.payload,
      };
    });
    builder.addCase(getArticle.rejected, (state, action) => {
      return {
        ...state,
        fetching_current_error: action.payload,
        fetching_current_status: "failed",
      };
    });
    builder.addCase(likeArticle.pending, (state) => {
      console.log("liking...");
    });
    builder.addCase(likeArticle.fulfilled, (state, action) => {
      console.log("liked");
      const inComingArticle = action.payload;
      const updatedArticles = state.articles.map((article) =>
        article._id === inComingArticle._id ? inComingArticle : article
      );
      return { ...state, articles: updatedArticles };
    });
    builder.addCase(likeArticle.rejected, (state, action) => {
      console.log("😢 failed");
    });
    builder.addCase(deleteArticle.pending, (state) => {
      console.log("deleting...");
    });
    builder.addCase(deleteArticle.fulfilled, (state, action) => {
      onToast("success", "Article deleted");
      const updatedArticles = state.articles.filter(
        (a) => a._id !== action.payload._id
      );
      return { ...state, articles: updatedArticles };
    });
    builder.addCase(deleteArticle.rejected, (state) => {
      console.log("failed");
    });
    builder.addCase(commentOnArticle.pending, (state) => {
      return { ...state, comment_status: "pending" };
    });
    builder.addCase(commentOnArticle.fulfilled, (state, action) => {
      onToast("success", "Comment shared");
      const inComingArticle = action.payload;
      const updatedArticles = state.articles.map((article) =>
        article._id === inComingArticle._id ? inComingArticle : article
      );
      return {
        ...state,
        comment_status: "successful",
        articles: updatedArticles,
      };
    });
    builder.addCase(commentOnArticle.rejected, (state, action) => {
      return {
        ...state,
        comment_error: action.payload,
        comment_status: "failed",
      };
    });
    builder.addCase(likeCurrentArticle.pending, (state) => {
      console.log("liking...");
    });
    builder.addCase(likeCurrentArticle.fulfilled, (state, action) => {
      return { ...state, current: action.payload };
    });
    builder.addCase(likeCurrentArticle.rejected, (state) => {
      console.log("failed");
    });
    builder.addCase(commentOnCurrentArticle.pending, (state) => {
      return { ...state, comment_current_status: "pending" };
    });
    builder.addCase(commentOnCurrentArticle.fulfilled, (state, action) => {
      onToast("success", "Comment shared");
      return {
        ...state,
        comment_current_status: "successful",
        current: action.payload,
      };
    });
    builder.addCase(commentOnCurrentArticle.rejected, (state, action) => {
      return {
        ...state,
        comment_current_error: action.payload,
        comment_current_status: "failed",
      };
    });
    builder.addCase(likeComment.pending, (state) => {
      console.log("liking...");
    });
    builder.addCase(likeComment.fulfilled, (state: any, action) => {
      console.log("comment liked");
      const incomingChnages = action.payload;
      const updatedComment = state.current.comments.map((c: any) =>
        c._id === incomingChnages._id ? incomingChnages : c
      );
      return {
        ...state,
        current: { ...state.current, comments: updatedComment },
      };
    });
    builder.addCase(likeComment.rejected, (state) => {
      console.log("failed");
    });
  },
});

export default ArticleSlice.reducer;
