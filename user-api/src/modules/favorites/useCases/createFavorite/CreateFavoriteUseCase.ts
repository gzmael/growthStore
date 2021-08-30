import { InvalidUserError } from '@modules/accounts/errors/InvalidUserError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { Favorite } from '../../infra/typeorm/entities/Favorite';
import { IFavoritesRepository } from '../../repositories/IFavoritesRepository';

interface IRequest {
  source_id: string;
  source_type: string;
  user_id: string;
}

@injectable()
class CreateFavoriteUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  async execute({
    source_id,
    source_type,
    user_id,
  }: IRequest): Promise<Favorite> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new InvalidUserError();
    }

    const favorite = await this.favoritesRepository.create({
      source_id,
      source_type,
      user_id,
    });

    return favorite;
  }
}

export { CreateFavoriteUseCase };
