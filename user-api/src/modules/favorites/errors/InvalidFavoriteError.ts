import { AppError } from '@shared/errors/AppError';

class InvalidFavoriteError extends AppError {
  constructor() {
    super('Invalid Favorite', 400);
  }
}

export { InvalidFavoriteError };
