import { IUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO';
import { UserToken } from '@modules/accounts/infra/typeorm/entities/UserToken';
import {
  IFindByUserAndToken,
  IUsersTokensRepository,
} from '@modules/accounts/repositories/IUsersTokensRepository';

class FakeUsersTokensRepository implements IUsersTokensRepository {
  private userTokens: UserToken[] = [];

  async create({
    expires_date,
    token,
    type,
    user_id,
  }: IUserTokenDTO): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      user_id,
      type,
      token,
      expires_date,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = this.userTokens.find(
      usertoken => usertoken.token === token,
    );

    return userToken;
  }

  async findByUserIdAndToken({
    token,
    type,
    user_id,
  }: IFindByUserAndToken): Promise<UserToken | undefined> {
    const userToken = this.userTokens.find(
      usertoken =>
        usertoken.token === token &&
        usertoken.type === type &&
        usertoken.user_id === user_id,
    );

    return userToken;
  }

  async delete(id: string): Promise<void> {
    const userTokenIndex = this.userTokens.findIndex(
      userTokenFind => userTokenFind.id === id,
    );

    this.userTokens.splice(userTokenIndex, 1);
  }

  async deleteRefreshTokensById(id: string): Promise<void> {
    const updatedTokens = this.userTokens.filter(
      token => token.user_id !== id && token.type === 'refresh',
    );

    this.userTokens = updatedTokens;
  }

  async deletePasswordTokensById(id: string): Promise<void> {
    const updatedTokens = this.userTokens.filter(
      token => token.user_id !== id && token.type === 'password',
    );

    this.userTokens = updatedTokens;
  }

  async save(token: UserToken): Promise<UserToken> {
    const userTokenIndex = this.userTokens.findIndex(
      userTokenFind => userTokenFind.id === token.id,
    );

    this.userTokens.splice(userTokenIndex, 1, token);

    return this.userTokens[userTokenIndex];
  }
}

export { FakeUsersTokensRepository };
