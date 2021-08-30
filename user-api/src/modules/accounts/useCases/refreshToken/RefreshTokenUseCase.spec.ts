import { InvalidUserError } from '@modules/accounts/errors/InvalidUserError';
import { FakeUsersRepository } from '@modules/accounts/repositories/fakes/FakeUsersRepository';
import { FakeUsersTokensRepository } from '@modules/accounts/repositories/fakes/FakeUsersTokensRepository';
import { JsonWebTokenError } from 'jsonwebtoken';

import { DayJSProvider } from '@shared/container/providers/DateProvider/implementations/DayJSProvider';
import { JwtTokenProvider } from '@shared/container/providers/TokenProvider/implementations/JwtTokenProvider';

import { RefreshTokenUseCase } from './RefreshTokenUseCase';

let refreshTokenUseCase: RefreshTokenUseCase;
let fakeUsersTokensRepository: FakeUsersTokensRepository;
let fakeUsersRepository: FakeUsersRepository;

let dayJsProvider: DayJSProvider;
let jwtProvider: JwtTokenProvider;

describe('Refresh Token', () => {
  beforeEach(() => {
    jwtProvider = new JwtTokenProvider();
    fakeUsersTokensRepository = new FakeUsersTokensRepository();
    fakeUsersRepository = new FakeUsersRepository();
    dayJsProvider = new DayJSProvider();

    refreshTokenUseCase = new RefreshTokenUseCase(
      fakeUsersRepository,
      fakeUsersTokensRepository,
      jwtProvider,
      dayJsProvider,
    );
  });

  it('Should be able to refresh token', async () => {
    const { email, id } = await fakeUsersRepository.create({
      email: 'teste@teste.com',
      name: 'Name',
      password: 'asd',
    });

    const { token } = await fakeUsersTokensRepository.create({
      expires_date: dayJsProvider.addDay(dayJsProvider.dateNow(), 30),
      token: jwtProvider.generateRefreshToken(id, email),
      type: 'refresh',
      user_id: id,
    });

    const refreshToken = await refreshTokenUseCase.execute(token);

    expect(refreshToken).toHaveProperty('token');
    expect(refreshToken.refresh_token).toEqual(token);
  });

  it('Should not be able to refresh a invalid token', async () => {
    await expect(
      refreshTokenUseCase.execute('invalid-token'),
    ).rejects.toBeInstanceOf(JsonWebTokenError);
  });

  it('Should not be able to refresh a token with a non-user', async () => {
    const { token } = await fakeUsersTokensRepository.create({
      expires_date: dayJsProvider.addDay(dayJsProvider.dateNow(), 30),
      token: jwtProvider.generateRefreshToken('non-user-id', 'teste@teste.com'),
      type: 'refresh',
      user_id: 'non-user-id',
    });

    await expect(refreshTokenUseCase.execute(token)).rejects.toBeInstanceOf(
      InvalidUserError,
    );
  });
});
