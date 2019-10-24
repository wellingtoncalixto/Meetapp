import Meetup from '../models/Meetup';
import File from '../models/File';

class OrganizingController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const user_id = req.userId;

    const meetup = await Meetup.findAll({
      where: {
        user_id,
      },
      order: [['id', 'DESC']],
      limit: 20,
      offset: (page - 1) * 20,
    });

    return res.json(meetup);
  }

  async show(req, res) {
    const meetup = await Meetup.findByPk(req.params.id, {
      include: [
        {
          model: File,
          as: 'banner',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!meetup) {
      return res.status(400).json({ error: 'Meetup not found' });
    }

    if (meetup.user_id !== req.userId) {
      return res.status(400).json({ error: 'Unauthorized' });
    }

    return res.json({
      meetup,
    });
  }
}
export default new OrganizingController();
