import { IPetsResponseDTO } from '@modules/pets/dtos/ICreatePetsDTO';
import { PetMap } from '@modules/pets/mapper/PetMap';
import { IPetsRepository } from '@modules/pets/repositories/IPetsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetPetsByIdsUseCase {
  constructor(
    @inject('PetsRepository')
    private petsRepository: IPetsRepository,
  ) {}

  async execute(ids: string[]): Promise<IPetsResponseDTO[]> {
    const pets = await this.petsRepository.findByIds(ids);

    return PetMap.toListDTO(pets);
  }
}

export { GetPetsByIdsUseCase };
