import dotenv from 'dotenv';

dotenv.config({ silent: true });

export default {
  port: process.env.PORT,
  db: {
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    options: {
      host: process.env.HOST,
      dialect: process.env.DIALECT,
      pool_max: process.env.POOL_MAX,
      pool_min: process.env.POOL_MIN,
      pool_acqurie: process.env.POOL_ACQURIE,
      pool_idle: process.env.POOL_IDLE,
      define: {
        freezeTableName: true,
      },
    },
  },
};
