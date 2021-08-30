import { FakeFavoritesRepository } from '@modules/favorites/repositories/fakes/FakeRentalsRepository';

import { ListFavoritesUseCase } from './ListFavoritesUseCase';

let fakeFavoritesRepository: FakeFavoritesRepository;
let listFavoritesUseCase: ListFavoritesUseCase;

describe('List Favorites', () => {
  beforeEach(() => {
    fakeFavoritesRepository = new FakeFavoritesRepository();
    listFavoritesUseCase = new ListFavoritesUseCase(fakeFavoritesRepository);
  });

  it('Should be able to list all favorites by user', async () => {
    [...new Array(26)].forEach(async (item, index) => {
      await fakeFavoritesRepository.create({
        source_id: `source-id-${index % 2}`,
        source_type: index % 2 === 0 ? 'petshop' : 'candy',
        user_id: `user-id-${index % 2}`,
      });
    });

    const favorites = await listFavoritesUseCase.execute('user-id-0');

    expect(favorites.length).toEqual(13);
  });
});
