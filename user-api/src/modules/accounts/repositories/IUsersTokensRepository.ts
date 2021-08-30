import { UserToken } from '@modules/accounts/infra/typeorm/entities/UserToken';

import { IUserTokenDTO } from '../dtos/ICreateUserTokenDTO';

interface IFindByUserAndToken {
  user_id: string;
  token: string;
  type: 'activation' | 'password' | 'refresh';
}

interface IUsersTokensRepository {
  create(date: IUserTokenDTO): Promise<UserToken>;
  findByUserIdAndToken({
    user_id,
    token,
    type,
  }: IFindByUserAndToken): Promise<UserToken | undefined>;
  findByToken(token: string): Promise<UserToken | undefined>;
  save(token: UserToken): Promise<UserToken>;
  delete(id: string): Promise<void>;
  deleteRefreshTokensById(id: string): Promise<void>;
  deletePasswordTokensById(id: string): Promise<void>;
}

export { IUsersTokensRepository, IFindByUserAndToken };
