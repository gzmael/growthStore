import { ICreatePetDTO } from '../dtos/ICreatePetsDTO';
import {
  IFilterPetRequestDTO,
  IPetsCacheDTO,
} from '../dtos/IFilterPetsRequestDTO';
import { Pet } from '../infra/typeorm/entities/Pet';

interface IPetsRepository {
  create(data: ICreatePetDTO): Promise<Pet>;
  findById(id: string): Promise<Pet | undefined>;
  findByIds(ids: string[]): Promise<Pet[]>;
  listAllPets(filter: IFilterPetRequestDTO): Promise<IPetsCacheDTO>;
}

export { IPetsRepository };
