import { InvalidUserError } from '@modules/accounts/errors/InvalidUserError';
import { FakeUsersRepository } from '@modules/accounts/repositories/fakes/FakeUsersRepository';

import { GetProfileUseCase } from './GetProfileUseCase';

let getProfileUseCase: GetProfileUseCase;
let fakeUsersRepository: FakeUsersRepository;

describe('Get Profile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    getProfileUseCase = new GetProfileUseCase(fakeUsersRepository);
  });

  it('Should be able to get Profile', async () => {
    const user = await fakeUsersRepository.create({
      email: 'email',
      name: 'Name',
      password: 'pass',
    });

    const profile = await getProfileUseCase.execute(user.id);

    expect(profile.id).toEqual(user.id);
  });

  it('Should not be able to get Profile by non-user', async () => {
    await expect(
      getProfileUseCase.execute('non-user-id'),
    ).rejects.toBeInstanceOf(InvalidUserError);
  });
});
