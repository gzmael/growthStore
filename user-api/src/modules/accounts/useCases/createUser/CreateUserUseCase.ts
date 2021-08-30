import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { UserAlreadyExistsError } from '@modules/accounts/errors/UserAlreadyExistsError';
import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

import { IHashProvider } from '@shared/container/providers/HashProvider/models/IHashProvider';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const existsUserWithSameEmail = await this.usersRepository.findByEmail(
      email,
    );

    if (existsUserWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const passHash = await this.hashProvider.generateHash(password);
    const user = await this.usersRepository.create({
      name,
      email,
      password: passHash,
    });

    return user;
  }
}

export { CreateUserUseCase };
