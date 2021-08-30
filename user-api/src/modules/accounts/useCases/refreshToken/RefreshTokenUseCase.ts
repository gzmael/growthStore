import { InvalidRefreshTokenError } from '@modules/accounts/errors/InvalidRefreshTokenError';
import { InvalidUserError } from '@modules/accounts/errors/InvalidUserError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { inject, injectable } from 'tsyringe';

import { IDateProvider } from '@shared/container/providers/DateProvider/models/IDateProvider';
import { ITokenProvider } from '@shared/container/providers/TokenProvider/models/ITokenProvider';

interface ITokenResponse {
  token: string;
  refresh_token: string;
}
@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('TokenProvider')
    private tokenProvider: ITokenProvider,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute(refresh_token: string): Promise<ITokenResponse> {
    const { sub: user_id } = this.tokenProvider.verifyIsValidToken({
      token: refresh_token,
      secret_type: 'refresh',
    });

    const userToken = await this.usersTokensRepository.findByUserIdAndToken({
      token: refresh_token,
      type: 'refresh',
      user_id,
    });

    if (!userToken) {
      throw new InvalidRefreshTokenError();
    }

    const userExists = await this.usersRepository.findById(user_id);

    if (!userExists) {
      throw new InvalidUserError();
    }

    const newToken = this.tokenProvider.generateToken(user_id);

    const dateNow = this.dateProvider.dateNow();
    const refresh_expires_days = this.tokenProvider.expiresRefreshTokenDays();
    const expires_date = this.dateProvider.addDay(
      dateNow,
      refresh_expires_days,
    );

    userToken.expires_date = expires_date;

    await this.usersTokensRepository.save(userToken);

    return {
      refresh_token,
      token: newToken,
    };
  }
}

export { RefreshTokenUseCase };
