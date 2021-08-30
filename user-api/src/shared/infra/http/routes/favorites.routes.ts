import { CreateFavoriteController } from '@modules/favorites/useCases/createFavorite/CreateFavoriteController';
import { DeleteFavoriteController } from '@modules/favorites/useCases/deleteFavorite/DeleteFavoriteController';
import { ListFavoritesController } from '@modules/favorites/useCases/listFavorites/ListFavoritesController';
import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const favoriteRouters = Router();

const createFavoriteController = new CreateFavoriteController();
const deleteFavoriteController = new DeleteFavoriteController();
const listFavoritescontroller = new ListFavoritesController();

favoriteRouters.use(ensureAuthenticated);

favoriteRouters.get('/', listFavoritescontroller.handle);

favoriteRouters.post(
  '/',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      source_id: Joi.string().uuid().required(),
      source_type: Joi.string().required(),
    }),
  }),
  createFavoriteController.handle,
);

favoriteRouters.delete('/:id', deleteFavoriteController.handle);

export { favoriteRouters };
