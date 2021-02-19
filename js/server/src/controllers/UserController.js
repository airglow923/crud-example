import { User } from '../models';

const list = async (req, res) => {
  try {
    res.send(await User.findAll());
  } catch (err) {
    res.status(501).send({
      error: 'Server failure: list',
    });
  }
};

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
    res.status(502).send({
      error: 'Server failure: search',
    });
  }
};

const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user.toJSON());
  } catch (err) {
    res.status(503).send({
      error: 'Server failure: register',
    });
  }
};

export { list, search, register };
