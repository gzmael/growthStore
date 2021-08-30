import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteFavoriteUseCase } from './DeleteFavoriteUseCase';

class DeleteFavoriteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { id: user_id } = request.user;

    const deleteFavoriteUseCase = container.resolve(DeleteFavoriteUseCase);
    await deleteFavoriteUseCase.execute({
      id,
      user_id,
    });

    return response.status(204).json();
  }
}

export { DeleteFavoriteController };
