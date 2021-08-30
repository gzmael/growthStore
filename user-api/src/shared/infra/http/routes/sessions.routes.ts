import { AuthenticateUserController } from '@modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { RefreshTokenController } from '@modules/accounts/useCases/refreshToken/RefreshTokenController';
import { Router } from 'express';

const authenticateRoutes = Router();

const authenticateController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();
authenticateRoutes.post('/', authenticateController.handle);
authenticateRoutes.post('/refresh-token', refreshTokenController.handle);

export { authenticateRoutes };
