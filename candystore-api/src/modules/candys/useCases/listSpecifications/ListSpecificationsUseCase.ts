import { ISpecificationResponseDTO } from '@modules/candys/dtos/ICreateSpecificationDTO';
import { SpecificationMap } from '@modules/candys/mapper/SpecificationMap';
import { ISpecificationsRepository } from '@modules/candys/repositories/ISpecificationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute(): Promise<ISpecificationResponseDTO[]> {
    const specifications = await this.specificationsRepository.list();

    return SpecificationMap.toListDTO(specifications);
  }
}

export { ListSpecificationsUseCase };
