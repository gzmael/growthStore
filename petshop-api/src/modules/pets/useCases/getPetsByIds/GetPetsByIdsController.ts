import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetPetsByIdsUseCase } from './GetPetsByIdsUseCase';

class GetPetsByIdsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ids } = request.query;
    const getPetsByIdsUseCase = container.resolve(GetPetsByIdsUseCase);

    let idsFormated: string[] = [];
    if (typeof ids === 'string') {
      idsFormated.push(ids);
    }

    if (typeof ids === 'object') {
      idsFormated = ids as string[];
    }

    const pets = await getPetsByIdsUseCase.execute(idsFormated);

    return response.json(pets);
  }
}

export { GetPetsByIdsController };
