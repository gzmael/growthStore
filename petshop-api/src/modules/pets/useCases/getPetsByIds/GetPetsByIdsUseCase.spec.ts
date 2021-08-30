import { FakePetsRepository } from '@modules/pets/repositories/fakes/FakePetsRepository';

import { GetPetsByIdsUseCase } from './GetPetsByIdsUseCase';

let getPetsByIdsUseCase: GetPetsByIdsUseCase;
let fakePetsRepository: FakePetsRepository;

describe('List Pets by IDs', () => {
  beforeEach(() => {
    fakePetsRepository = new FakePetsRepository();
    getPetsByIdsUseCase = new GetPetsByIdsUseCase(fakePetsRepository);
  });

  it('Should be able to list pets by IDs', async () => {
    const pet1 = await fakePetsRepository.create({
      breed: 'Raça',
      gener: 'female',
      name: `Name 1`,
      price: 10,
      vaccinated: true,
      photo: `image-1`,
    });

    await fakePetsRepository.create({
      breed: 'Raça',
      gener: 'male',
      name: `Name 2`,
      price: 10,
      vaccinated: true,
      photo: `image-2`,
    });

    const pet3 = await fakePetsRepository.create({
      breed: 'Raça',
      gener: 'female',
      name: `Name 3`,
      price: 10,
      vaccinated: true,
      photo: `image-1`,
    });

    const pets = await getPetsByIdsUseCase.execute([
      pet1.public_id,
      pet3.public_id,
    ]);
    expect(pets).toHaveLength(2);
  });
});
