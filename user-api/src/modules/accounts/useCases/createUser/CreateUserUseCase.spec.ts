import { UserAlreadyExistsError } from '@modules/accounts/errors/UserAlreadyExistsError';
import { FakeUsersRepository } from '@modules/accounts/repositories/fakes/FakeUsersRepository';

import { BCryptHashProvider } from '@shared/container/providers/HashProvider/implementations/BCryptProvider';

import { CreateUserUseCase } from './CreateUserUseCase';

let fakeUsersRepository: FakeUsersRepository;
let hashProvider: BCryptHashProvider;
let createUserUseCase: CreateUserUseCase;

describe('Create a User', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    hashProvider = new BCryptHashProvider();
    createUserUseCase = new CreateUserUseCase(
      fakeUsersRepository,
      hashProvider,
    );
  });

  it('Should be able to create a User', async () => {
    const user = await createUserUseCase.execute({
      email: 'email@email.com',
      name: 'Name',
      password: 'asdqwe123',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a User with e-mail already in use', async () => {
    await createUserUseCase.execute({
      email: 'email@email.com',
      name: 'Name',
      password: 'asdqwe123',
    });

    await expect(
      createUserUseCase.execute({
        email: 'email@email.com',
        name: 'Name',
        password: 'asdqwe123',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });
});
