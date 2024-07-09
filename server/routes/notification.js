import express from "express";
import {
  getAllUnread,
  getNotifications,
  readNotification,
} from "../controllers/notification.js";

const notificationRoutes = express.Router();

notificationRoutes.get("/unread/:userId", getAllUnread);
notificationRoutes.get("/all/:userId", getNotifications);
notificationRoutes.patch("/read/one/:userId", readNotification);

export default notificationRoutes;
