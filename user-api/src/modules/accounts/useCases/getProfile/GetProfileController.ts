import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetProfileUseCase } from './GetProfileUseCase';

class GetProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const getProfileUseCase = container.resolve(GetProfileUseCase);

    const user = await getProfileUseCase.execute(user_id);

    return response.json(classToClass(user));
  }
}

export { GetProfileController };
