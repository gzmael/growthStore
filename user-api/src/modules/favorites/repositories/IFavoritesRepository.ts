import { ICreateFavoritesDTO } from '../dtos/ICreateFavoritesDTO';
import { Favorite } from '../infra/typeorm/entities/Favorite';

interface IFavoritesRepository {
  create(date: ICreateFavoritesDTO): Promise<Favorite>;
  findById(id: string): Promise<Favorite | undefined>;
  findByUserId(user_id: string): Promise<Favorite[]>;
  delete(id: string): Promise<void>;
}

export { IFavoritesRepository };
