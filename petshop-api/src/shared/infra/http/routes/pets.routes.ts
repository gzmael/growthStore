import { GetPetsByIdsController } from '@modules/pets/useCases/getPetsByIds/GetPetsByIdsController';
import { ListPetsController } from '@modules/pets/useCases/listPets/ListPetsController';
import { Router } from 'express';

const petsRouter = Router();
const listPetsController = new ListPetsController();
const getPetsByIdsController = new GetPetsByIdsController();

petsRouter.get('/', listPetsController.handle);
petsRouter.get('/list', getPetsByIdsController.handle);

export { petsRouter };
