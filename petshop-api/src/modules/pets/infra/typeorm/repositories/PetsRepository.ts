import { ICreatePetDTO } from '@modules/pets/dtos/ICreatePetsDTO';
import {
  IFilterPetRequestDTO,
  IPetsCacheDTO,
} from '@modules/pets/dtos/IFilterPetsRequestDTO';
import { IPetsRepository } from '@modules/pets/repositories/IPetsRepository';
import { getRepository, Repository } from 'typeorm';

import { Pet } from '../entities/Pet';

class PetsRepository implements IPetsRepository {
  private repository: Repository<Pet>;

  constructor() {
    this.repository = getRepository(Pet);
  }

  async create({
    breed,
    gener,
    name,
    vaccinated,
    photo,
    price,
  }: ICreatePetDTO): Promise<Pet> {
    const pet = this.repository.create({
      breed,
      gener,
      name,
      photo,
      price,
      vaccinated,
    });

    await this.repository.save(pet);

    return pet;
  }

  async findById(id: string): Promise<Pet | undefined> {
    const pet = await this.repository.findOne(id);

    return pet;
  }

  async findByIds(ids: string[]): Promise<Pet[]> {
    const queryIds = ids.map(id => `'${id}'`).join(',');
    const pets = await this.repository
      .createQueryBuilder('pets')
      .leftJoinAndSelect('pets.specifications', 'specifications')
      .where(`pets.public_id IN (${queryIds})`)
      .getMany();

    return pets;
  }

  async listAllPets({
    limit = 10,
    order = 'created_at',
    orderType = 'ASC',
    page = 1,
    filter,
    specifications,
  }: IFilterPetRequestDTO): Promise<IPetsCacheDTO> {
    const fields = ['name', 'gener', 'breed'];
    let orderField = 'pets.created_at';

    switch (order) {
      case 'name':
        orderField = 'pets.name';
        break;
      case 'gener':
        orderField = 'pets.gener';
        break;
      case 'breed':
        orderField = 'pets.breed';
        break;
      case 'price':
        orderField = 'pets.price';
        break;
      default:
        orderField = 'pets.created_at';
        break;
    }

    if (filter) {
      const queryFields = fields
        .map(field => `pets.${field} LIKE :filter`)
        .join(' OR ');

      if (specifications) {
        const querySpecifications = specifications
          .map(specification => `'${specification}'`)
          .join(',');

        const paramsQb = this.repository
          .createQueryBuilder('pets')
          .innerJoinAndSelect('pets.specifications', 'specifications')
          .select('pets.id')
          .groupBy('pets.id')
          .where(`specifications.public_id IN (${querySpecifications})`);

        const [products, total] = await this.repository
          .createQueryBuilder('pets')
          .leftJoinAndSelect('pets.specifications', 'specifications')
          .where(`(${queryFields})`)
          .andWhere(`pets.id IN (${paramsQb.getQuery()})`)
          .setParameter('filter', `%${filter}%`)
          .skip((page - 1) * limit)
          .take(limit)
          .orderBy(orderField, orderType === 'ASC' ? 'ASC' : 'DESC')
          .getManyAndCount();

        return {
          total,
          totalFiltered: products.length,
          data: products,
        };
      }

      const [products, total] = await this.repository
        .createQueryBuilder('pets')
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(orderField, orderType === 'ASC' ? 'ASC' : 'DESC')
        .leftJoinAndSelect('pets.specifications', 'specifications')
        .where(queryFields)
        .setParameter('filter', `%${filter}%`)
        .getManyAndCount();

      return {
        total,
        totalFiltered: products.length,
        data: products,
      };
    }

    if (specifications) {
      const querySpecifications = specifications
        .map(specification => `'${specification}'`)
        .join(',');

      const paramsQb = this.repository
        .createQueryBuilder('pets')
        .innerJoinAndSelect('pets.specifications', 'specifications')
        .select('pets.id')
        .groupBy('pets.id')
        .where(`specifications.public_id IN (${querySpecifications})`);

      const [products, total] = await this.repository
        .createQueryBuilder('pets')
        .innerJoinAndSelect('pets.specifications', 'specifications')
        .where(`pets.id IN (${paramsQb.getQuery()})`)
        .orderBy(orderField, orderType === 'ASC' ? 'ASC' : 'DESC')
        .skip((page - 1) * limit)
        .take(limit)
        .getManyAndCount();

      return {
        total,
        totalFiltered: products.length,
        data: products,
      };
    }

    const [products, total] = await this.repository
      .createQueryBuilder('pets')
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy(orderField, orderType === 'ASC' ? 'ASC' : 'DESC')
      .innerJoinAndSelect('pets.specifications', 'specifications')
      .getManyAndCount();

    return {
      total,
      totalFiltered: products.length,
      data: products,
    };
  }
}

export { PetsRepository };
