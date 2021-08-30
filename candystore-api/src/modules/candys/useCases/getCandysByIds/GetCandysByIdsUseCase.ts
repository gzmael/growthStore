import { ICandyResponseDTO } from '@modules/candys/dtos/ICreateCandyDTO';
import { CandyMap } from '@modules/candys/mapper/CandyMap';
import { ICandysRepository } from '@modules/candys/repositories/ICandysRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetCandysByIdsUseCase {
  constructor(
    @inject('CandysRepository')
    private candysRepository: ICandysRepository,
  ) {}

  async execute(ids: string[]): Promise<ICandyResponseDTO[]> {
    const candys = await this.candysRepository.findByIds(ids);

    return CandyMap.toListDTO(candys);
  }
}

export { GetCandysByIdsUseCase };
