import { DEV_URL, PRO_URL } from "@/hooks/url";
import { onToast } from "@/lib/components/ToastContainer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ArticleForm {
  userId: string;
  desc: string;
  image: Array<string | any> | any;
  tag: string;
}
interface ActionProps {
  userId: string;
  articleId?: string | any;
  desc?: string;
  image?: Array<string | any> | any;
  commentId?: string;
}

export const shareArticle = createAsyncThunk(
  "article/share",
  async ({ userId, desc, image, tag }: ArticleForm, { rejectWithValue }) => {
    try {
      const article = await axios.post(`${PRO_URL}/article/create`, {
        userId,
        desc,
        image,
        tag,
      });
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getArticles = createAsyncThunk(
  "article/all",
  async (id, { rejectWithValue }) => {
    try {
      const article = await axios.get(`${PRO_URL}/article/all`);
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getArticle = createAsyncThunk(
  "article/one",
  async ({ articleId, userId }: ActionProps, { rejectWithValue }) => {
    try {
      const article = await axios.get(
        `${PRO_URL}/article/current/${articleId}/view/${userId}`
      );
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const likeArticle = createAsyncThunk(
  "article/one/like",
  async ({ userId, articleId }: ActionProps, { rejectWithValue }) => {
    try {
      const article = await axios.patch(`${PRO_URL}/article/one/like`, {
        userId,
        articleId,
      });
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const likeCurrentArticle = createAsyncThunk(
  "article/current/like",
  async ({ userId, articleId }: ActionProps, { rejectWithValue }) => {
    try {
      const article = await axios.patch(`${PRO_URL}/article/one/like`, {
        userId,
        articleId,
      });
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const commentOnArticle = createAsyncThunk(
  "article/one/comment",
  async (
    { userId, desc, image, articleId }: ActionProps,
    { rejectWithValue }
  ) => {
    try {
      const article = await axios.patch(`${PRO_URL}/article/one/comment`, {
        userId,
        desc,
        image,
        articleId,
      });
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const commentOnCurrentArticle = createAsyncThunk(
  "article/current/comment",
  async (
    { userId, desc, image, articleId }: ActionProps,
    { rejectWithValue }
  ) => {
    try {
      const article = await axios.patch(`${PRO_URL}/article/one/comment`, {
        userId,
        desc,
        image,
        articleId,
      });
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const likeComment = createAsyncThunk(
  "article/one/comment/like",
  async ({ userId, commentId }: ActionProps, { rejectWithValue }) => {
    try {
      const article = await axios.patch(`${PRO_URL}/article/one/comment/like`, {
        userId,
        commentId,
      });
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "article/delete",
  async ({ userId, articleId }: ActionProps, { rejectWithValue }) => {
    try {
      const article = await axios.delete(
        `${PRO_URL}/article/one/${userId}/delete/${articleId}`
      );
      return article?.data;
    } catch (error: any) {
      onToast("error", `${error?.response?.data}`);
      console.log(error?.response?.data);
      return rejectWithValue(error?.response?.data);
    }
  }
);
