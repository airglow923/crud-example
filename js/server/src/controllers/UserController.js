import { User } from '../models';

const search = async (req, res) => {
  try {
    const { email } = req.query;
    let result = [];
    if (email !== undefined) {
      result = await User.findAll({
        where: {
          email,
        },
      });
    }
    res.send(result);
  } catch (err) {
    res.status(400).send({
      error: 'Users not found',
    });
  }
};

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user.toJSON());
  } catch (err) {
    res.status(400).send({
      error: 'Error no: 400',
    });
  }
};

export { search, register };
