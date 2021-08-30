import { ListSpecificationsController } from '@modules/pets/useCases/listSpecifications/ListSpecificationsController';
import { Router } from 'express';

const specificationsRouter = Router();
const listSpecificationsController = new ListSpecificationsController();

specificationsRouter.get('/', listSpecificationsController.handle);

export { specificationsRouter };
