import { classToClass } from 'class-transformer';

import { ICandyResponseDTO } from '../dtos/ICreateCandyDTO';
import { Candy } from '../infra/typeorm/entities/Candy';
import { SpecificationMap } from './SpecificationMap';

class CandyMap {
  static toDTO(candy: Candy): ICandyResponseDTO {
    const {
      brand,
      created_at,
      description,
      name,
      price,
      public_id,
      rating,
      photo,
      specifications,
    } = classToClass(candy);

    return {
      brand,
      created_at,
      description,
      name,
      price,
      public_id,
      rating,
      photo,
      specifications: SpecificationMap.toListDTO(specifications),
    };
  }

  static toListDTO(candys: Candy[]): ICandyResponseDTO[] {
    return candys.map(candy => this.toDTO(candy));
  }
}

export { CandyMap };
