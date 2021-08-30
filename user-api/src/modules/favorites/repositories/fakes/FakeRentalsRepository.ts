import { ICreateFavoritesDTO } from '@modules/favorites/dtos/ICreateFavoritesDTO';
import { Favorite } from '@modules/favorites/infra/typeorm/entities/Favorite';

import { IFavoritesRepository } from '../IFavoritesRepository';

class FakeFavoritesRepository implements IFavoritesRepository {
  private favorites: Favorite[] = [];

  async create({
    source_id,
    source_type,
    user_id,
  }: ICreateFavoritesDTO): Promise<Favorite> {
    const favorite = new Favorite();

    Object.assign(favorite, {
      source_id,
      user_id,
      source_type,
      created_at: new Date(),
    });

    this.favorites.push(favorite);

    return favorite;
  }

  async findById(id: string): Promise<Favorite | undefined> {
    return this.favorites.find(favorite => favorite.id === id);
  }

  async findByUserId(id: string): Promise<Favorite[]> {
    return this.favorites.filter(favorite => favorite.user_id === id);
  }

  async save(favorite: Favorite): Promise<Favorite> {
    const favoriteIndex = this.favorites.findIndex(
      favoriteFind => favoriteFind.id === favorite.id,
    );
    this.favorites.splice(favoriteIndex, 1, favorite);

    return this.favorites[favoriteIndex];
  }

  async delete(id: string): Promise<void> {
    const favoriteIndex = this.favorites.findIndex(
      favoriteFind => favoriteFind.id === id,
    );
    this.favorites.splice(favoriteIndex, 1);
  }
}

export { FakeFavoritesRepository };
