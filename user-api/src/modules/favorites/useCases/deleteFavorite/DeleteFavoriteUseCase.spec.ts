import { InvalidFavoriteOwnerError } from '@modules/favorites/errors/InvalidFavoriteOwnerError';
import { FakeFavoritesRepository } from '@modules/favorites/repositories/fakes/FakeRentalsRepository';

import { DeleteFavoriteUseCase } from './DeleteFavoriteUseCase';

let deleteFavoriteUseCase: DeleteFavoriteUseCase;
let fakeFavoritesRepository: FakeFavoritesRepository;

describe('DevolutionRental', () => {
  beforeEach(() => {
    fakeFavoritesRepository = new FakeFavoritesRepository();
    deleteFavoriteUseCase = new DeleteFavoriteUseCase(fakeFavoritesRepository);
  });

  it('Should be able to delete a Favorite', async () => {
    await fakeFavoritesRepository.create({
      source_id: 'source_id',
      source_type: 'petshop',
      user_id: 'user_id',
    });

    await fakeFavoritesRepository.create({
      source_id: 'source_id2',
      source_type: 'candystore',
      user_id: 'user_id_2',
    });

    await fakeFavoritesRepository.create({
      source_id: 'source_id3',
      source_type: 'candystore',
      user_id: 'user_id_2',
    });

    const favorite = await fakeFavoritesRepository.create({
      source_id: 'source_id4',
      source_type: 'petshop',
      user_id: 'user_id_2',
    });

    await deleteFavoriteUseCase.execute({
      id: favorite.id,
      user_id: 'user_id_2',
    });

    const favorites = await fakeFavoritesRepository.findByUserId('user_id_2');

    expect(favorites).toHaveLength(2);
  });

  it('Should not be able to delete a Favorite with wrong owner', async () => {
    await fakeFavoritesRepository.create({
      source_id: 'source_id',
      source_type: 'petshop',
      user_id: 'user_id',
    });

    await fakeFavoritesRepository.create({
      source_id: 'source_id2',
      source_type: 'candystore',
      user_id: 'user_id_2',
    });

    const favorite = await fakeFavoritesRepository.create({
      source_id: 'source_id4',
      source_type: 'petshop',
      user_id: 'user_id_2',
    });

    await expect(
      deleteFavoriteUseCase.execute({
        id: favorite.id,
        user_id: 'user_id',
      }),
    ).rejects.toBeInstanceOf(InvalidFavoriteOwnerError);
  });
});
