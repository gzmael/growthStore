import {
  IFilterCandyRequestDTO,
  IListCandyResponse,
} from '@modules/candys/dtos/IFilterCandyRequestDTO';
import { CandyMap } from '@modules/candys/mapper/CandyMap';
import { ICandysRepository } from '@modules/candys/repositories/ICandysRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCandysUseCase {
  constructor(
    @inject('CandysRepository')
    private candysRepository: ICandysRepository,
  ) {}

  async execute({
    limit = 10,
    order = 'created_at',
    orderType = 'ASC',
    page = 1,
    filter,
    specifications,
  }: IFilterCandyRequestDTO): Promise<IListCandyResponse> {
    const { data, total, totalFiltered } =
      await this.candysRepository.listAllCandys({
        limit,
        order,
        orderType,
        page,
        filter,
        specifications,
      });

    return {
      data: CandyMap.toListDTO(data),
      total,
      totalFiltered,
    };
  }
}

export { ListCandysUseCase };
