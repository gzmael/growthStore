import { ICreateSpecificationDTO } from '@modules/candys/dtos/ICreateSpecificationDTO';
import { Specification } from '@modules/candys/infra/typeorm/entities/Specification';

import { ISpecificationsRepository } from '../ISpecificationsRepository';

class FakeSpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[] = [];

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, { name, description });

    this.specifications.push(specification);

    return specification;
  }

  async list(): Promise<Specification[]> {
    return this.specifications;
  }
}

export { FakeSpecificationsRepository };
