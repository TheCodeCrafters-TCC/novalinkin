import express from "express";
import {
  commentOnArticle,
  createArticle,
  deleteArticle,
  getAllArticles,
  getArticle,
  getUserArticle,
  getUserPhotos,
  likeArticle,
  likeComment,
} from "../controllers/article.js";

const ArticlesRoute = express.Router();
// post
ArticlesRoute.post("/create", createArticle);
// get
ArticlesRoute.get("/all", getAllArticles);
ArticlesRoute.get("/current/:articleId/view/:userId", getArticle);
ArticlesRoute.get("/user/articles/:userId", getUserArticle);
ArticlesRoute.get("/user/collections/:userId", getUserPhotos);
// patch
ArticlesRoute.patch("/one/like", likeArticle);
ArticlesRoute.patch("/one/comment", commentOnArticle);
ArticlesRoute.patch("/one/comment/like", likeComment);
// delete
ArticlesRoute.delete("/one/:userId/delete/:articleId", deleteArticle);

export default ArticlesRoute;
