import { AppError } from '@shared/errors/AppError';

class InvalidRefreshTokenError extends AppError {
  constructor() {
    super('Refresh Token does not exists!', 401);
  }
}

export { InvalidRefreshTokenError };
