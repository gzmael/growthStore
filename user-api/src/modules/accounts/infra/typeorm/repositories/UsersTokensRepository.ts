import { IUserTokenDTO } from '@modules/accounts/dtos/ICreateUserTokenDTO';
import {
  IFindByUserAndToken,
  IUsersTokensRepository,
} from '@modules/accounts/repositories/IUsersTokensRepository';
import { getRepository, Repository } from 'typeorm';

import { UserToken } from '../entities/UserToken';

class UsersTokensRepository implements IUsersTokensRepository {
  private ormRepository: Repository<UserToken>;

  constructor() {
    this.ormRepository = getRepository(UserToken);
  }

  async create({
    expires_date,
    token,
    type,
    user_id,
  }: IUserTokenDTO): Promise<UserToken> {
    const userToken = this.ormRepository.create({
      expires_date,
      token,
      type,
      user_id,
    });

    await this.ormRepository.save(userToken);

    return userToken;
  }

  async findByUserIdAndToken({
    user_id,
    token,
    type,
  }: IFindByUserAndToken): Promise<UserToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: {
        token,
        user_id,
        type,
      },
    });

    return userToken;
  }

  async findByToken(token: string): Promise<UserToken | undefined> {
    const userToken = await this.ormRepository.findOne({
      where: {
        token,
      },
    });

    return userToken;
  }

  public async delete(token_id: string): Promise<void> {
    await this.ormRepository.delete(token_id);
  }

  public async save(token: UserToken): Promise<UserToken> {
    const updatedToken = await this.ormRepository.save(token);
    return updatedToken;
  }

  public async deleteRefreshTokensById(id: string): Promise<void> {
    await this.ormRepository.delete({
      user_id: id,
      type: 'refresh',
    });
  }

  public async deletePasswordTokensById(id: string): Promise<void> {
    await this.ormRepository.delete({
      user_id: id,
      type: 'password',
    });
  }
}

export { UsersTokensRepository };
