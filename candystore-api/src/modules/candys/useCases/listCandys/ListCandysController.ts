import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCandysUseCase } from './ListCandysUseCase';

class ListCandysController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { limit, order, orderType, page, filter, specifications } =
      request.query;
    const listCandysUseCase = container.resolve(ListCandysUseCase);

    let specificationFormated = [];
    if (specifications && typeof specifications === 'string') {
      specificationFormated.push(specifications);
    }
    if (specifications && typeof specifications === 'object') {
      specificationFormated = specifications as string[];
    }

    const candys = await listCandysUseCase.execute({
      limit: Number(limit) || 10,
      order: order as string,
      orderType: String(orderType) === 'ASC' ? 'ASC' : 'DESC',
      page: Number(page) || 1,
      filter: filter as string,
      specifications: specificationFormated.length > 0 ? specificationFormated : undefined,
    });

    return response.json(candys);
  }
}

export { ListCandysController };
