import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPetsUseCase } from './ListPetsUseCase';

class ListPetsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { limit, order, orderType, page, filter, specifications } =
      request.query;
    const listPetsUseCase = container.resolve(ListPetsUseCase);

    let specificationFormated = [];
    if (specifications && typeof specifications === 'string') {
      specificationFormated.push(specifications);
    }
    if (specifications && typeof specifications === 'object') {
      specificationFormated = specifications as string[];
    }

    const pets = await listPetsUseCase.execute({
      limit: Number(limit) || 10,
      order: order as string,
      orderType: String(orderType) === 'ASC' ? 'ASC' : 'DESC',
      page: Number(page) || 1,
      filter: filter as string,
      specifications:
        specificationFormated.length > 0 ? specificationFormated : undefined,
    });

    return response.json(pets);
  }
}

export { ListPetsController };
