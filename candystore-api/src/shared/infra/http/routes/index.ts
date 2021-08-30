import { Router } from 'express';

import { candysRouter } from './candys.routes';
import { specificationsRouter } from './specifications.routes';

const router = Router();

router.use('/candys', candysRouter);
router.use('/specifications', specificationsRouter);

export { router };
