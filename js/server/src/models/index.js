import Sequelize from 'sequelize';
import config from '../config';
import UserDefinition from './User';

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.options,
);

const User = UserDefinition(sequelize, Sequelize);

export { sequelize, Sequelize, User };
