import { User } from '../models';

const list = async (req, res) => {
  try {
    res.send(
      await User.findAll({
        attributes: ['email', 'password'],
      }),
    );
  } catch (err) {
    res.status(501).send({
      error: 'Server failure: list',
    });
  }
};

const search = async (req, res) => {
  try {
    const { email } = req.query;
    let result;
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

const unregister = async (req, res) => {
  try {
    await User.destroy(req.body);
  } catch (err) {
    res.status(504).send({
      error: 'Server failure: unregister',
    });
  }
};

const update = async (req, res) => {
  try {
    const user = await User.update(req.body);
    res.send(user.toJSON());
  } catch (err) {
    res.status(505).send({
      error: 'Server failure: update',
    });
  }
};

const unregisterAll = async (req, res) => {
  try {
    await User.destroy({ where: {} });
    res.send('All users unregistered');
  } catch (err) {
    res.status(506).send({
      error: 'Server failure: unregisterAll',
    });
  }
};

export {
  list, search, register, unregister, update, unregisterAll,
};
