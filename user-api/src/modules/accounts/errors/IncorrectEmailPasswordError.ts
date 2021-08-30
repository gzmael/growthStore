import { AppError } from '@shared/errors/AppError';

class IncorrectEmailPasswordError extends AppError {
  constructor() {
    super('Incorrect email/password combination.', 401);
  }
}

export { IncorrectEmailPasswordError };
