import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateFavoriteUseCase } from './CreateFavoriteUseCase';

class CreateFavoriteController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { source_id, source_type } = request.body;

    const createFavoriteUseCase = container.resolve(CreateFavoriteUseCase);

    const favorite = await createFavoriteUseCase.execute({
      source_id,
      source_type,
      user_id: id,
    });
    return response.status(201).json(favorite);
  }
}

export { CreateFavoriteController };
