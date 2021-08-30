import { CandysRepository } from '@modules/candys/infra/typeorm/repositories/CandysRepository';
import { SpecificationsRepository } from '@modules/candys/infra/typeorm/repositories/SpecificationsRepository';
import { ICandysRepository } from '@modules/candys/repositories/ICandysRepository';
import { ISpecificationsRepository } from '@modules/candys/repositories/ISpecificationsRepository';
import { container } from 'tsyringe';
import './providers';

container.registerSingleton<ICandysRepository>(
  'CandysRepository',
  CandysRepository,
);

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository,
);
