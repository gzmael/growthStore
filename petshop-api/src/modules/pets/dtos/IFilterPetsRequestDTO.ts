import { Pet } from '../infra/typeorm/entities/Pet';
import { IPetsResponseDTO } from './ICreatePetsDTO';

interface IListPetsResponse {
  total: number;
  totalFiltered: number;
  data: IPetsResponseDTO[];
}

interface IPetsCacheDTO {
  total: number;
  totalFiltered: number;
  data: Pet[];
}

interface IFilterPetRequestDTO {
  limit?: number;
  page?: number;
  order?: string;
  orderType?: 'ASC' | 'DESC';
  filter?: string;
  specifications?: string[];
}

export { IPetsCacheDTO, IFilterPetRequestDTO, IListPetsResponse };
