import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import tutorial from './tutorial.model';

dotenv.config({ silent: true });

const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    operatorAliases: false,
    pool: {
      max: Number(process.env.POOL_MAX),
      min: Number(process.env.POOL_MIN),
      acquire: Number(process.env.POOL_ACQUIRE),
      idle: Number(process.env.POOL_IDLE),
    },
  },
);

export default {
  Sequelize,
  sequelize,
  tutorials: tutorial(sequelize, Sequelize),
};
