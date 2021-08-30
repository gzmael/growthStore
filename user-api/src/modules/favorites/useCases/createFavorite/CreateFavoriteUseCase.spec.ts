import { InvalidUserError } from '@modules/accounts/errors/InvalidUserError';
import { FakeUsersRepository } from '@modules/accounts/repositories/fakes/FakeUsersRepository';
import { FakeFavoritesRepository } from '@modules/favorites/repositories/fakes/FakeRentalsRepository';

import { CreateFavoriteUseCase } from './CreateFavoriteUseCase';

let createFavoriteUseCase: CreateFavoriteUseCase;
let fakeUsersRepository: FakeUsersRepository;
let fakeFavoritesRepository: FakeFavoritesRepository;

describe('Create Favorite', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeFavoritesRepository = new FakeFavoritesRepository();
    createFavoriteUseCase = new CreateFavoriteUseCase(
      fakeUsersRepository,
      fakeFavoritesRepository,
    );
  });

  it('Should be able to create a new Favorite', async () => {
    const user = await fakeUsersRepository.create({
      email: 'email@email',
      name: 'Name',
      password: 'asdqwe123',
    });

    const favorite = await createFavoriteUseCase.execute({
      source_id: 'source-id',
      source_type: 'petshop',
      user_id: user.id,
    });

    expect(favorite).toHaveProperty('id');
  });

  it('Should not be able to create a new Favorite with a non-user', async () => {
    await expect(
      createFavoriteUseCase.execute({
        source_id: 'source-id',
        source_type: 'petshop',
        user_id: 'non-user-id',
      }),
    ).rejects.toBeInstanceOf(InvalidUserError);
  });
});
