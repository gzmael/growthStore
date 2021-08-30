import { PetsRepository } from '@modules/pets/infra/typeorm/repositories/PetsRepository';
import { SpecificationsRepository } from '@modules/pets/infra/typeorm/repositories/SpecificationsRepository';
import { IPetsRepository } from '@modules/pets/repositories/IPetsRepository';
import { ISpecificationsRepository } from '@modules/pets/repositories/ISpecificationsRepository';
import { container } from 'tsyringe';
import './providers';

container.registerSingleton<IPetsRepository>('PetsRepository', PetsRepository);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
