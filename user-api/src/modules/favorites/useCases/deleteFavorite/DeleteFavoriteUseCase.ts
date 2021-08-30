import { InvalidFavoriteError } from '@modules/favorites/errors/InvalidFavoriteError';
import { InvalidFavoriteOwnerError } from '@modules/favorites/errors/InvalidFavoriteOwnerError';
import { IFavoritesRepository } from '@modules/favorites/repositories/IFavoritesRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id: string;
  user_id: string;
}
@injectable()
class DeleteFavoriteUseCase {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  async execute({ id, user_id }: IRequest): Promise<void> {
    const favorite = await this.favoritesRepository.findById(id);

    if (!favorite) {
      throw new InvalidFavoriteError();
    }

    if (favorite.user_id !== user_id) {
      throw new InvalidFavoriteOwnerError();
    }

    await this.favoritesRepository.delete(id);
  }
}

export { DeleteFavoriteUseCase };
