import { Router } from 'express';

import { petsRouter } from './pets.routes';
import { specificationsRouter } from './specifications.routes';

const router = Router();

router.use('/pets', petsRouter);
router.use('/specifications', specificationsRouter);

export { router };
