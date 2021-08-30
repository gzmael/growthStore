import {
  IFilterPetRequestDTO,
  IListPetsResponse,
} from '@modules/pets/dtos/IFilterPetsRequestDTO';
import { PetMap } from '@modules/pets/mapper/PetMap';
import { IPetsRepository } from '@modules/pets/repositories/IPetsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListPetsUseCase {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  async execute({
    limit = 10,
    order = 'created_at',
    orderType = 'ASC',
    page = 1,
    filter,
    specifications,
  }: IFilterPetRequestDTO): Promise<IListPetsResponse> {
    const { data, total, totalFiltered } =
      await this.petsRepository.listAllPets({
        filter,
        limit,
        order,
        orderType,
        page,
        specifications,
      });

    return {
      data: PetMap.toListDTO(data),
      total,
      totalFiltered,
    };
  }
}

export { ListPetsUseCase };
