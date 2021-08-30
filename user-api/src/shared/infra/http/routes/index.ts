import { Router } from 'express';

import { accountRouters } from './account.routes';
import { favoriteRouters } from './favorites.routes';
import { authenticateRoutes } from './sessions.routes';

const router = Router();

router.use('/sessions', authenticateRoutes);
router.use('/accounts', accountRouters);
router.use('/favorites', favoriteRouters);

export { router };
