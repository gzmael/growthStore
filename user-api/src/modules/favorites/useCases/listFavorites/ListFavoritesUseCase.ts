import { Favorite } from '@modules/favorites/infra/typeorm/entities/Favorite';
import { IFavoritesRepository } from '@modules/favorites/repositories/IFavoritesRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListFavoritesUseCase {
  constructor(
    @inject('FavoritesRepository')
    private favoritesRepository: IFavoritesRepository,
  ) {}

  async execute(user_id: string): Promise<Favorite[]> {
    const favorites = await this.favoritesRepository.findByUserId(user_id);

    return favorites;
  }
}

export { ListFavoritesUseCase };
