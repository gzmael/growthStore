import '@shared/container';

import { errors } from 'celebrate';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import 'reflect-metadata';

import createConnection from '@shared/infra/typeorm';

import { errorsMessages } from './middlewares/errorsMessages';
import { router } from './routes';

createConnection();
const app = express();
app.use(cors());
app.use(express.json());

app.use(router);
app.use(errors());
app.use(errorsMessages);

export { app };
