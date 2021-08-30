import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetCandysByIdsUseCase } from './GetCandysByIdsUseCase';

class GetCandysByIdsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { ids } = request.query;
    const getCandysByIdsUseCase = container.resolve(GetCandysByIdsUseCase);

    let idsFormated: string[] = [];
    if (typeof ids === 'string') {
      idsFormated.push(ids);
    }

    if (typeof ids === 'object') {
      idsFormated = ids as string[];
    }

    const candys = await getCandysByIdsUseCase.execute(idsFormated);

    return response.json(candys);
  }
}

export { GetCandysByIdsController };
