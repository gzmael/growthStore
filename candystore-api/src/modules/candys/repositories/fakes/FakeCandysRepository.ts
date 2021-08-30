import { ICreateCandyDTO } from '@modules/candys/dtos/ICreateCandyDTO';
import {
  ICandyCacheDTO,
  IFilterCandyRequestDTO,
} from '@modules/candys/dtos/IFilterCandyRequestDTO';
import { Candy } from '@modules/candys/infra/typeorm/entities/Candy';

import { ICandysRepository } from '../ICandysRepository';

class FakeCandysRepository implements ICandysRepository {
  private candys: Candy[] = [];

  async create({
    name,
    price,
    brand,
    description,
    rating,
    photo,
  }: ICreateCandyDTO): Promise<Candy> {
    const candy = new Candy();
    Object.assign(candy, {
      name,
      price,
      brand,
      description,
      rating,
      photo,
      created_at: new Date(),
    });

    candy.specifications = [];

    this.candys.push(candy);

    return candy;
  }

  async findById(id: string): Promise<Candy | undefined> {
    const pet = this.candys.find(pet => pet.id === id);

    return pet;
  }

  async findByIds(ids: string[]): Promise<Candy[]> {
    const candys = this.candys.filter(candy => ids.includes(candy.public_id));

    return candys;
  }

  async listAllCandys({
    limit,
    page,
    filter,
    order,
    orderType,
  }: IFilterCandyRequestDTO): Promise<ICandyCacheDTO> {
    const total = this.candys.length;
    let filtered = this.candys;

    if (filter) {
      filtered = this.candys.filter(candy => {
        if (candy.brand.includes(filter)) {
          return candy;
        }
        if (candy.name.includes(filter)) {
          return candy;
        }
        if (candy.description.includes(filter)) {
          return candy;
        }
        return null;
      });
    }

    const pageLimit = limit || 10;
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

        if (order === 'brand') {
          if (a.brand > b.brand) return orderType === 'ASC' ? 1 : -1;
          if (a.brand < b.brand) return orderType === 'ASC' ? -1 : 1;
          return 0;
        }

        if (order === 'rating') {
          if (a.rating > b.rating) return orderType === 'ASC' ? 1 : -1;
          if (a.rating < b.rating) return orderType === 'ASC' ? -1 : 1;
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

export { FakeCandysRepository };
