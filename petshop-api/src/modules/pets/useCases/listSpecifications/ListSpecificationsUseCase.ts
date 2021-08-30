import { Specification } from '@modules/pets/infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from '@modules/pets/repositories/ISpecificationsRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();

    return specifications;
  }
}

export { ListSpecificationsUseCase };
