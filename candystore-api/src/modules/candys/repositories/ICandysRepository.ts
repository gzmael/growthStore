import { ICreateCandyDTO } from '../dtos/ICreateCandyDTO';
import {
  ICandyCacheDTO,
  IFilterCandyRequestDTO,
} from '../dtos/IFilterCandyRequestDTO';
import { Candy } from '../infra/typeorm/entities/Candy';

interface ICandysRepository {
  create(data: ICreateCandyDTO): Promise<Candy>;
  findById(id: string): Promise<Candy | undefined>;
  findByIds(ids: string[]): Promise<Candy[]>;
  listAllCandys(filter: IFilterCandyRequestDTO): Promise<ICandyCacheDTO>;
}

export { ICandysRepository };
