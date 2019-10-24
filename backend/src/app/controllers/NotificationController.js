import Notification from '../schemas/Notification';

class NotificationController {
  async index(req, res) {
    const notifications = await Notification.find({
      user: req.userId,
      read: false,
    })
      .sort('createdAt')
      .limit(20);

    if (!notifications) {
      return res.send('You not have notifications');
    }
    return res.json(notifications);
  }
}

export default new NotificationController();
