import { ICreateCandyDTO } from '@modules/candys/dtos/ICreateCandyDTO';
import {
  ICandyCacheDTO,
  IFilterCandyRequestDTO,
} from '@modules/candys/dtos/IFilterCandyRequestDTO';
import { ICandysRepository } from '@modules/candys/repositories/ICandysRepository';
import { getRepository, Repository } from 'typeorm';

import { Candy } from '../entities/Candy';

class CandysRepository implements ICandysRepository {
  private repository: Repository<Candy>;

  constructor() {
    this.repository = getRepository(Candy);
  }

  async create({
    name,
    price,
    brand,
    description,
    rating,
    photo,
  }: ICreateCandyDTO): Promise<Candy> {
    const candy = this.repository.create({
      name,
      price,
      brand,
      description,
      rating,
      photo,
    });

    await this.repository.save(candy);

    return candy;
  }

  async findById(id: string): Promise<Candy | undefined> {
    const candy = await this.repository.findOne(id);

    return candy;
  }

  async findByIds(ids: string[]): Promise<Candy[]> {
    const queryIds = ids.map(id => `'${id}'`).join(',');
    const candys = await this.repository
      .createQueryBuilder('candys')
      .leftJoinAndSelect('candys.specifications', 'specifications')
      .where(`candys.public_id IN (${queryIds})`)
      .getMany();

    return candys;
  }

  async listAllCandys({
    limit = 10,
    order = 'created_at',
    orderType = 'ASC',
    page = 1,
    filter,
    specifications,
  }: IFilterCandyRequestDTO): Promise<ICandyCacheDTO> {
    const fields = ['name', 'brand', 'description'];
    let orderField = 'candys.created_at';

    switch (order) {
      case 'name':
        orderField = 'candys.name';
        break;
      case 'brand':
        orderField = 'candys.brand';
        break;
      case 'rating':
        orderField = 'candys.rating';
        break;
      case 'price':
        orderField = 'candys.price';
        break;
      default:
        orderField = 'candys.created_at';
        break;
    }

    if (filter) {
      const queryFields = fields
        .map(field => `candys.${field} LIKE :filter`)
        .join(' OR ');

      if (specifications) {
        const querySpecifications = specifications
          .map(specification => `'${specification}'`)
          .join(',');

        const paramsQb = this.repository
          .createQueryBuilder('candys')
          .innerJoinAndSelect('candys.specifications', 'specifications')
          .select('candys.id')
          .groupBy('candys.id')
          .where(`specifications.public_id IN (${querySpecifications})`);

        const [products, total] = await this.repository
          .createQueryBuilder('candys')
          .leftJoinAndSelect('candys.specifications', 'specifications')
          .where(`(${queryFields})`)
          .andWhere(`candys.id IN (${paramsQb.getQuery()})`)
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
        .createQueryBuilder('candys')
        .skip((page - 1) * limit)
        .take(limit)
        .orderBy(orderField, orderType === 'ASC' ? 'ASC' : 'DESC')
        .leftJoinAndSelect('candys.specifications', 'specifications')
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
        .createQueryBuilder('candys')
        .innerJoinAndSelect('candys.specifications', 'specifications')
        .select('candys.id')
        .groupBy('candys.id')
        .where(`specifications.public_id IN (${querySpecifications})`);

      const [products, total] = await this.repository
        .createQueryBuilder('candys')
        .innerJoinAndSelect('candys.specifications', 'specifications')
        .where(`candys.id IN (${paramsQb.getQuery()})`)
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
      .createQueryBuilder('candys')
      .skip((page - 1) * limit)
      .take(limit)
      .orderBy(orderField, orderType === 'ASC' ? 'ASC' : 'DESC')
      .innerJoinAndSelect('candys.specifications', 'specifications')
      .getManyAndCount();

    return {
      total,
      totalFiltered: products.length,
      data: products,
    };
  }
}

export { CandysRepository };
