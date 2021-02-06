import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import db from './models';

const currentDir = dirname(fileURLToPath(import.meta.url));
const frontPath = resolve(currentDir, 'views/');
const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
};

app.use(express.static(frontPath));
app.use(morgan('combined'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ force: true });

app.get('/', (req, res) => {
  res.sendFile(resolve(frontPath, 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});