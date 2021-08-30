import { Candy } from '../infra/typeorm/entities/Candy';
import { ICandyResponseDTO } from './ICreateCandyDTO';

interface IListCandyResponse {
  total: number;
  totalFiltered: number;
  data: ICandyResponseDTO[];
}

interface ICandyCacheDTO {
  total: number;
  totalFiltered: number;
  data: Candy[];
}

interface IFilterCandyRequestDTO {
  limit?: number;
  page?: number;
  order?: string;
  orderType?: 'ASC' | 'DESC';
  filter?: string;
  specifications?: string[];
}

export { ICandyCacheDTO, IFilterCandyRequestDTO, IListCandyResponse };
