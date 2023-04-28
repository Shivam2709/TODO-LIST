import express from 'express';
import cors from 'cors';

import Connection from './Database/db.js';
import Routes from './routes/route.js';

const app = express();

app.use(cors());

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use('/', Routes);

Connection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));