import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import config from './config';
import db from './models';
import users from './routes/users';

const currentDir = dirname(fileURLToPath(import.meta.url));
const frontPath = resolve(currentDir, 'views/');
const PORT = config.port || 8080;
const corsOptions = {
  origin: 'http://localhost:8080',
};

const main = async () => {
  await db.sequelize
    .authenticate()
    .then(() => console.log('Database successfully connected.'));

  const app = express();
  app.use(express.static(frontPath));
  app.use(compression());
  app.use(morgan('combined'));
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/', (req, res) => res.send(resolve(frontPath, 'index.html')));

  app.use('/users', users);

  await db.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  });
};

main().catch((err) => console.error(`${err}`));
