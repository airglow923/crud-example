import dotenvSafe from 'dotenv-safe';
import env from './env';

dotenvSafe.config({
  silent: true,
  allowEmptyValues: true,
  path: env,
  example: `${env}.example`,
});

export default {
  port: process.env.PORT || 8080,
  db: {
    database: process.env.DATABASE || 'rest_api_example',
    username: process.env.USERNAME || 'root',
    password: process.env.PASSWORD || '',
    options: {
      host: process.env.HOST || 'localhost',
      dialect: process.env.DIALECT || 'mysql',
      pool_max: process.env.POOL_MAX || 5,
      pool_min: process.env.POOL_MIN || 0,
      pool_acqurie: process.env.POOL_ACQURIE || 30000,
      pool_idle: process.env.POOL_IDLE || 10000,
      define: {
        freezeTableName: true,
      },
    },
  },
};
