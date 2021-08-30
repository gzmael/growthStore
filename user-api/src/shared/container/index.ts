import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { FavoritesRepository } from '@modules/favorites/infra/typeorm/repositories/FavoritesRepository';
import { IFavoritesRepository } from '@modules/favorites/repositories/IFavoritesRepository';
import { container } from 'tsyringe';
import './providers';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IFavoritesRepository>(
  'FavoritesRepository',
  FavoritesRepository,
);

container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository,
);
