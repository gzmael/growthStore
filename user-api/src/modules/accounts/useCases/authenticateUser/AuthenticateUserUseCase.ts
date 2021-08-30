import { IncorrectEmailPasswordError } from '@modules/accounts/errors/IncorrectEmailPasswordError';
import { inject, injectable } from 'tsyringe';

import { IDateProvider } from '@shared/container/providers/DateProvider/models/IDateProvider';
import { IHashProvider } from '@shared/container/providers/HashProvider/models/IHashProvider';
import { ITokenProvider } from '@shared/container/providers/TokenProvider/models/ITokenProvider';

import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IUsersTokensRepository } from '../../repositories/IUsersTokensRepository';

interface ICredentials {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  token: string;
  refresh_token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  public async execute({ email, password }: ICredentials): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new IncorrectEmailPasswordError();
    }

    const passwordMatch = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!passwordMatch) {
      throw new IncorrectEmailPasswordError();
    }

    const token = this.tokenProvider.generateToken(user.id);

    const refresh_token = this.tokenProvider.generateRefreshToken(
      user.id,
      user.email,
    );

    const dateNow = this.dateProvider.dateNow();
    const expiresRefreshTokenDays =
      this.tokenProvider.expiresRefreshTokenDays();

    const refreshTokenExpiresDate = this.dateProvider.addDay(
      dateNow,
      expiresRefreshTokenDays,
    );

    // apaga tokens anteriores
    await this.usersTokensRepository.deleteRefreshTokensById(user.id);

    await this.usersTokensRepository.create({
      expires_date: refreshTokenExpiresDate,
      token: refresh_token,
      type: 'refresh',
      user_id: user.id,
    });

    return {
      user: {
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      token,
      refresh_token,
    };
  }
}

export { AuthenticateUserUseCase };
