import { AppError } from '@shared/errors/AppError';

class InvalidFavoriteOwnerError extends AppError {
  constructor() {
    super("You can't change this Favorite", 403);
  }
}

export { InvalidFavoriteOwnerError };
