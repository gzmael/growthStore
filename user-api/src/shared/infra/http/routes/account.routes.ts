import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { GetProfileController } from '@modules/accounts/useCases/getProfile/GetProfileController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const accountRouters = Router();

const createUserController = new CreateUserController();
const getProfileController = new GetProfileController();

accountRouters.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    }),
  }),
  createUserController.handle,
);

accountRouters.get('/me', ensureAuthenticated, getProfileController.handle);

export { accountRouters };
