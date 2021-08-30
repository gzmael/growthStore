import { ICreateSpecificationDTO } from '@modules/pets/dtos/ICreateSpecificationDTO';
import { ISpecificationsRepository } from '@modules/pets/repositories/ISpecificationsRepository';
import { getRepository, Repository } from 'typeorm';

import { Specification } from '../entities/Specification';

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      name,
      description,
    });

    await this.repository.save(specification);

    return specification;
  }

  async list(): Promise<Specification[]> {
    const specifications = await this.repository
      .createQueryBuilder('specifications')
      .innerJoin('specifications.pets', 'pet')
      .groupBy('specifications.id')
      .getMany();

    return specifications;
  }
}

export { SpecificationsRepository };
