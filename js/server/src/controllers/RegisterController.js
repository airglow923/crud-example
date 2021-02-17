import { User } from '../models';

export default async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user.toJSON());
  } catch (err) {
    res.status(400).send({
      error: 'Error no: 400',
    });
  }
};
