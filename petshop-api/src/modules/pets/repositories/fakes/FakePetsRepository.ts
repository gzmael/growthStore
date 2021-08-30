import { ICreatePetDTO } from '@modules/pets/dtos/ICreatePetsDTO';
import {
  IFilterPetRequestDTO,
  IPetsCacheDTO,
} from '@modules/pets/dtos/IFilterPetsRequestDTO';
import { Pet } from '@modules/pets/infra/typeorm/entities/Pet';

import { IPetsRepository } from '../IPetsRepository';

class FakePetsRepository implements IPetsRepository {
  private pets: Pet[] = [];

  async create({
    breed,
    gener,
    name,
    vaccinated,
    photo,
    price,
  }: ICreatePetDTO): Promise<Pet> {
    const pet = new Pet();
    Object.assign(pet, {
      breed,
      gener,
      photo,
      name,
      price,
      vaccinated,
      created_at: new Date(),
    });

    pet.specifications = [];

    this.pets.push(pet);

    return pet;
  }

  async findById(id: string): Promise<Pet | undefined> {
    const pet = this.pets.find(pet => pet.id === id);

    return pet;
  }

  async findByIds(ids: string[]): Promise<Pet[]> {
    const pets = this.pets.filter(pet => ids.some(id => id === pet.public_id));

    return pets;
  }

  async listAllPets({
    limit,
    page,
    filter,
    order,
    orderType,
  }: IFilterPetRequestDTO): Promise<IPetsCacheDTO> {
    const total = this.pets.length;
    let filtered = this.pets;

    if (filter) {
      filtered = this.pets.filter(pet => {
        if (pet.breed.includes(filter)) {
          return pet;
        }
        if (pet.name.includes(filter)) {
          return pet;
        }
        if (pet.gener.includes(filter)) {
          return pet;
        }
        return null;
      });
    }

    const pageLimit = limit || 12;
    if (page) {
      filtered = filtered.slice((page - 1) * pageLimit, page * pageLimit);
    }

    if (order) {
      filtered = filtered.sort((a, b) => {
        if (order === 'name') {
          if (a.name > b.name) return orderType === 'ASC' ? 1 : -1;
          if (a.name < b.name) return orderType === 'ASC' ? -1 : 1;
          return 0;
        }

        if (order === 'created_at') {
          if (a.created_at > b.created_at) return orderType === 'ASC' ? 1 : -1;
          if (a.created_at < b.created_at) return orderType === 'ASC' ? -1 : 1;
          return 0;
        }

        if (order === 'gener') {
          if (a.gener > b.gener) return orderType === 'ASC' ? 1 : -1;
          if (a.gener < b.gener) return orderType === 'ASC' ? -1 : 1;
          return 0;
        }

        return 0;
      });
    }

    return {
      total,
      totalFiltered: filtered.length,
      data: filtered,
    };
  }
}

export { FakePetsRepository };
