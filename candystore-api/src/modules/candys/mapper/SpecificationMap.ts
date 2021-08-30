import { classToClass } from 'class-transformer';

import { ISpecificationResponseDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../infra/typeorm/entities/Specification';

class SpecificationMap {
  static toDTO(specification: Specification): ISpecificationResponseDTO {
    const { description, name, public_id } = classToClass(specification);

    return {
      description,
      name,
      public_id,
    };
  }

  static toListDTO(
    specifications: Specification[],
  ): ISpecificationResponseDTO[] {
    return specifications.map(specification => this.toDTO(specification));
  }
}

export { SpecificationMap };
