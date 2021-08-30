import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListFavoritesUseCase } from './ListFavoritesUseCase';

class ListFavoritesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;
    const listFavoritesUseCase = container.resolve(ListFavoritesUseCase);

    const favorites = await listFavoritesUseCase.execute(user_id);

    return response.json(favorites);
  }
}

export { ListFavoritesController };
