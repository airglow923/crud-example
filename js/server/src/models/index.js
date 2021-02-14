import Sequelize from 'sequelize';
import config from '../config';
import User from './User';

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.options,
);

export default {
  sequelize,
  Sequelize,
  users: User(sequelize, Sequelize),
};
