import { classToClass } from 'class-transformer';

import { IPetsResponseDTO } from '../dtos/ICreatePetsDTO';
import { Pet } from '../infra/typeorm/entities/Pet';
import { SpecificationMap } from './SpecificationMap';

class PetMap {
  static toDTO(pet: Pet): IPetsResponseDTO {
    const {
      name,
      price,
      created_at,
      public_id,
      photo,
      specifications,
      breed,
      gener,
      vaccinated,
    } = classToClass(pet);

    return {
      breed,
      created_at,
      gener,
      name,
      price,
      public_id,
      vaccinated,
      photo,
      specifications: SpecificationMap.toListDTO(specifications),
    };
  }

  static toListDTO(pets: Pet[]): IPetsResponseDTO[] {
    return pets.map(pet => this.toDTO(pet));
  }
}

export { PetMap };
