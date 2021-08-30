import { ICreateFavoritesDTO } from '@modules/favorites/dtos/ICreateFavoritesDTO';
import { IFavoritesRepository } from '@modules/favorites/repositories/IFavoritesRepository';
import { getRepository, Repository } from 'typeorm';

import { Favorite } from '../entities/Favorite';

class FavoritesRepository implements IFavoritesRepository {
  private repository: Repository<Favorite>;
  constructor() {
    this.repository = getRepository(Favorite);
  }

  async create({
    source_id,
    source_type,
    user_id,
  }: ICreateFavoritesDTO): Promise<Favorite> {
    const favorite = this.repository.create({
      source_id,
      source_type,
      user_id,
    });

    await this.repository.save(favorite);

    return favorite;
  }

  async findById(id: string): Promise<Favorite | undefined> {
    const rental = await this.repository.findOne(id);

    return rental;
  }

  async findByUserId(id: string): Promise<Favorite[]> {
    const rentals = await this.repository.find({
      where: {
        user_id: id,
      },
    });

    return rentals;
  }

  async save(rental: Favorite): Promise<Favorite> {
    const updatedRental = await this.repository.save(rental);
    return updatedRental;
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}

export { FavoritesRepository };
