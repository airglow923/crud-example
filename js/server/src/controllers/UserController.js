import { sequelize, User } from '../models';

const list = async (req, res) => {
  User.findAll({
    attributes: ['email', 'password'],
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        error: `${err} -- UserController.list`,
      });
    });
};

const search = async (req, res) => {
  const { email } = req.query;
  User.findByPk({
    where: {
      email,
    },
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        error: `${err} -- UserController.search`,
      });
    });
};

const register = async (req, res) => {
  User.create(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        error: `${err} -- UserController.register`,
      });
    });
};

const registerMultiple = async (req, res) => {
  User.bulkCreate(req.body)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        error: `${err} -- UserController.register`,
      });
    });
};

const unregister = async (req, res) => {
  const { email } = req.query;
  const users = await User.findAll({ where: { email } });
  const transaction = await sequelize.transaction();

  try {
    await Promise.all(
      users.map(async (user) => {
        await user.destroy({ transaction });
        return user.reload();
      }),
    );

    await transaction.commit();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send({
      error: `${err} -- UserController.unregister`,
    });
  }
};

const unregisterAll = async (req, res) => {
  try {
    await User.destroy({ where: {} });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).send({
      error: `${err} -- UserController.unregisterAll`,
    });
  }
};

const update = async (req, res) => {
  const { userId } = req.params;
  const { email, password } = req.query;
  User.update({ email, password }, { where: { id: userId } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        error: `${err} -- UserController.update`,
      });
    });
};

export {
  list,
  search,
  register,
  registerMultiple,
  unregister,
  unregisterAll,
  update,
};
