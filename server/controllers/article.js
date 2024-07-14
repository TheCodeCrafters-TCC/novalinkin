import ArticleModel from "../models/Article.js";
import CommentModel from "../models/Comment.js";
import NotificationModel from "../models/Notification.js";
import UserModel from "../models/User.js";
import Cloud from "../utils/cloudinary.js";
import pLimit from "p-limit";

export const createArticle = async (req, res) => {
  try {
    const { userId, desc, image, tag } = req.body;
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json("User not found");
    if (!tag) return res.status(403).json("Tag is request");
    if (image) {
      if (image.length > 2)
        return res.status(403).json("You can only share 2 images");
      const limit = pLimit(2);
      const imagesToUpload = image.map((img) => {
        return limit(async () => {
          const result = await Cloud.uploader.upload(img, {
            upload_preset: "NovaLinkin_Articles",
          });
          return result;
        });
      });

      const uploads = await Promise.all(imagesToUpload);
      if (uploads) {
        const article = new ArticleModel({
          userId,
          userName: user.firstName + " " + user.lastName,
          isVerified: user.isVerified,
          userProfile: user.userProfile,
          slugName: user.slugName,
          desc,
          tag,
          image: uploads,
        });
        const newArticle = await article.save();
        await user.updateOne({ $push: { articles: newArticle } });

        return res.status(201).json(newArticle);
      } else return res.status(404).json("Image not found");
    } else {
      const article = new ArticleModel({
        userId,
        userName: user.firstName + " " + user.lastName,
        isVerified: user.isVerified,
        userProfile: user.userProfile,
        desc,
        tag,
      });
      const newArticle = await article.save();
      await user.updateOne({ $push: { articles: newArticle } });

      return res.status(201).json(newArticle);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const articles = await ArticleModel.find();
    return res.status(200).json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const getArticle = async (req, res) => {
  try {
    const { articleId, userId } = req.params;
    const article = await ArticleModel.findById(articleId);
    if (!article) return res.status(404).json("Article not found");
    if (!article.views.includes(userId)) {
      const viewedArticle = await ArticleModel.findByIdAndUpdate(
        articleId,
        { $push: { views: userId } },
        { new: true }
      );
      return res.status(200).json(viewedArticle);
    } else return res.status(200).json(article);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const deleteArticle = async (req, res) => {
  try {
    const { userId, articleId } = req.params;
    const article = await ArticleModel.findById(articleId);
    const user = await UserModel.findById(userId);
    if (!article) return res.status(404).json("Article not found");
    if (userId !== article.userId) {
      return res.status(403).json("Unauthorized action");
    } else {
      if (article.image.length >= 1) {
        article.image.map(
          async (img) => await Cloud.uploader.destroy(img.public_id)
        );
        await user.updateOne({ $pull: { articles: article } });
        await article.deleteOne();
        return res.status(200).json(article);
      } else {
        await user.updateOne({ $pull: { articles: article } });
        await article.deleteOne();
        return res.status(200).json(article);
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const likeArticle = async (req, res) => {
  try {
    const { userId, articleId } = req.body;
    const article = await ArticleModel.findById(articleId);
    const user = await UserModel.findById(userId);
    if (!article) return res.status(404).json("Article not found");
    const owner = await UserModel.findById(article.userId);
    // Proceed if the user hasn't liked the article
    if (!article.likes.includes(userId)) {
      const notifyAction = new NotificationModel({
        Image: user.userProfile,
        header: `<strong>${user.firstName} ${user.lastName}</strong> liked your article`,
        body: `${article.desc}`,
        slugName: user.slugName,
        ownerId: owner._id,
        reactId: userId,
        notifyType: "like",
      });
      // If the article owner likes his or her own article, don't push a notification
      if (userId !== article.userId) {
        const newNotification = await notifyAction.save();
        await owner.updateOne({ $push: { notifications: newNotification } });
        const updatedArticle = await ArticleModel.findByIdAndUpdate(
          articleId,
          { $push: { likes: userId } },
          { new: true }
        );
        return res.status(200).json(updatedArticle);
      } else {
        const updatedArticle = await ArticleModel.findByIdAndUpdate(
          articleId,
          { $push: { likes: userId } },
          { new: true }
        );
        return res.status(200).json(updatedArticle);
      }
      // Pull userId if it exits in likes array
    } else {
      const updatedArticle = await ArticleModel.findByIdAndUpdate(
        articleId,
        { $pull: { likes: userId } },
        { new: true }
      );
      return res.status(200).json(updatedArticle);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const commentOnArticle = async (req, res) => {
  try {
    const { userId, desc, image, articleId } = req.body;
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json("User not found");
    const article = await ArticleModel.findById(articleId);
    if (!article) return res.status(404).json("Article not found");
    if (!desc) return res.status(400).json("Description is required");
    const owner = await UserModel.findById(article.userId);
    //   Check if the comment include image
    if (image) {
      if (image.length > 2)
        return res.status(403).json("You can only share 2 images");
      const limit = pLimit(2);
      const imagesToUpload = image.map((img) => {
        return limit(async () => {
          const result = await Cloud.uploader.upload(img, {
            upload_preset: "NovaLinkin_Comments",
          });
          return result;
        });
      });

      const uploads = await Promise.all(imagesToUpload);
      const comment = new CommentModel({
        userId,
        articleId,
        desc,
        image: uploads,
        userProfile: user.userProfile,
        isVerified: user.isVerified,
        userName: `${user.firstName} ${user.lastName}`,
        slugName: user.slugName,
      });

      const notifyAction = new NotificationModel({
        Image: user.userProfile,
        header: `<strong>${user.firstName} ${user.lastName}</strong> commented your article`,
        body: `${article.desc}`,
        slugName: user.slugName,
        ownerId: article.userId,
        reactId: userId,
        notifyType: "comment",
      });
      const newComment = await comment.save();
      if (userId !== article.userId) {
        const newNotification = await notifyAction.save();
        await owner.updateOne({ $push: { notifications: newNotification } });
        const updatedArticle = await ArticleModel.findByIdAndUpdate(
          articleId,
          { $push: { comments: newComment } },
          { new: true }
        );
        return res.status(201).json(updatedArticle);
      } else {
        const updatedArticle = await ArticleModel.findByIdAndUpdate(
          articleId,
          { $push: { comments: newComment } },
          { new: true }
        );
        return res.status(201).json(updatedArticle);
      }
      // Procced without image
    } else {
      const comment = new CommentModel({
        userId,
        articleId,
        desc,
        userProfile: user.userProfile,
        isVerified: user.isVerified,
        userName: `${user.firstName} ${user.lastName}`,
      });

      const notifyAction = new NotificationModel({
        Image: user.userProfile,
        header: `<strong>${user.firstName} ${user.lastName}</strong> commented your article`,
        body: `${article.desc}`,
        slugName: user.slugName,
        ownerId: article.userId,
        reactId: userId,
        notifyType: "comment",
      });
      const newComment = await comment.save();
      if (userId !== article.userId) {
        const newNotification = await notifyAction.save();
        await owner.updateOne({ $push: { notifications: newNotification } });
        const updatedArticle = await ArticleModel.findByIdAndUpdate(
          articleId,
          { $push: { comments: newComment } },
          { new: true }
        );
        return res.status(201).json(updatedArticle);
      } else {
        const updatedArticle = await ArticleModel.findByIdAndUpdate(
          articleId,
          { $push: { comments: newComment } },
          { new: true }
        );
        return res.status(201).json(updatedArticle);
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const likeComment = async (req, res) => {
  try {
    const { userId, commentId } = req.body;
    const comment = await CommentModel.findById(commentId);
    const user = await UserModel.findById(userId);
    if (!comment) return res.status(404).json("Comment not found");
    const owner = await UserModel.findById(comment.userId);

    let updatedComment;

    // Proceed if the user hasn't liked the comment
    if (!comment.likes.includes(userId)) {
      const notifyAction = new NotificationModel({
        Image: user.userProfile,
        header: `<strong>${user.firstName} ${user.lastName}</strong> liked your comment`,
        body: `${comment.desc}`,
        slugName: user.slugName,
        ownerId: owner._id,
        reactId: userId,
        notifyType: "like",
      });

      // If the comment owner likes his or her own comment, don't push a notification
      if (userId !== comment.userId) {
        const newNotification = await notifyAction.save();
        await owner.updateOne({ $push: { notifications: newNotification } });
      }

      updatedComment = await CommentModel.findByIdAndUpdate(
        commentId,
        { $push: { likes: userId } },
        { new: true }
      );
    } else {
      updatedComment = await CommentModel.findByIdAndUpdate(
        commentId,
        { $pull: { likes: userId } },
        { new: true }
      );
    }

    return res.status(200).json(updatedComment);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const getUserArticle = async (req, res) => {
  try {
    const { userId } = req.params;
    const articles = await ArticleModel.find({ userId });
    return res.status(200).json(articles);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

export const getUserPhotos = async (req, res) => {
  try {
    const { userId } = req.params;
    const articles = await ArticleModel.find({ userId });
    const photos = articles.map((article) => article.image);
    return res.status(200).json(photos);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};
