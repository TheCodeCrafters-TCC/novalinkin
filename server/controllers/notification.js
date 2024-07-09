import NotificationModel from "../models/Notification.js";

export const getAllUnread = async (req, res) => {
  try {
    const { userId } = req.params;
    const notification = await NotificationModel.find({ ownerId: userId });
    const unread = notification.filter((n) => n.seen === false);
    res.status(200).json(unread);
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const getNotifications = async (req, res) => {
  try {
    const { userId } = req.params;
    const notification = await NotificationModel.find({ ownerId: userId }).sort(
      { createdAt: -1 }
    );
    res.status(200).json(notification);
  } catch (error) {
    console.log({ error: error.message });
  }
};

export const readNotification = async (req, res) => {
  try {
    const { userId } = req.params;
    const { notificationId } = req.body;
    const notification = await NotificationModel.findById(notificationId);
    if (userId !== notification.ownerId) {
      return res.status(403).json("Not authorized");
    } else {
      if (!notification.seen) {
        await notification.updateOne({ $set: { seen: true } }, { new: true });
        return res.status(200).json(notification);
      } else console.log("Seen already");
    }
  } catch (error) {
    console.log({ error: error.message });
  }
};
