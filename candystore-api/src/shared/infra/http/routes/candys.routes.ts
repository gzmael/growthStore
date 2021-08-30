import { GetCandysByIdsController } from '@modules/candys/useCases/getCandysByIds/GetCandysByIdsController';
import { ListCandysController } from '@modules/candys/useCases/listCandys/ListCandysController';
import { Router } from 'express';

const candysRouter = Router();
const listCandysController = new ListCandysController();
const getCandysByIdsController = new GetCandysByIdsController();

candysRouter.get('/', listCandysController.handle);
candysRouter.get('/list', getCandysByIdsController.handle);

export { candysRouter };
