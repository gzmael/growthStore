import { FakePetsRepository } from '@modules/pets/repositories/fakes/FakePetsRepository';

import { ListPetsUseCase } from './ListPetsUseCase';

let listPetsUseCase: ListPetsUseCase;
let fakePetsRepository: FakePetsRepository;

describe('List All Pets', () => {
  beforeEach(() => {
    fakePetsRepository = new FakePetsRepository();
    listPetsUseCase = new ListPetsUseCase(fakePetsRepository);
  });

  it('Should be able to list all pets', async () => {
    [...new Array(38)].forEach(async (item, index) => {
      await fakePetsRepository.create({
        breed: 'Raça',
        gener: index % 2 === 0 ? 'female' : 'male',
        name: `Name ${index}`,
        price: index,
        vaccinated: index % 2 === 0,
        photo: `image-${index}`,
      });
    });

    const { total } = await listPetsUseCase.execute({});
    expect(total).toEqual(38);
  });

  it('Should be able to list with pets and paginate', async () => {
    [...new Array(38)].forEach(async (item, index) => {
      await fakePetsRepository.create({
        breed: 'Raça',
        gener: index % 2 === 0 ? 'female' : 'male',
        name: `Name ${index}`,
        price: index,
        vaccinated: index % 2 === 0,
        photo: `image-${index}`,
      });
    });

    const { totalFiltered, total } = await listPetsUseCase.execute({
      page: 4,
    });

    expect(total).toEqual(38);
    expect(totalFiltered).toEqual(8);
  });

  it('Should be able to list with pets in order', async () => {
    [...new Array(38)].forEach(async (item, index) => {
      await fakePetsRepository.create({
        breed: 'Raça',
        gener: index % 2 === 0 ? 'female' : 'male',
        name: `Name ${index}`,
        price: index,
        vaccinated: index % 2 === 0,
        photo: `image-${index}`,
      });
    });

    const { data } = await listPetsUseCase.execute({
      order: 'name',
      orderType: 'DESC',
    });

    expect(data[0].name).toEqual('Name 9');
  });

  it('Should be able to list with pets filtered', async () => {
    [...new Array(8)].forEach(async (item, index) => {
      await fakePetsRepository.create({
        breed: 'Raça',
        gener: index % 2 === 0 ? 'female' : 'male',
        name: `Name ${index}`,
        price: index,
        vaccinated: index % 2 === 0,
        photo: `image-${index}`,
      });
    });

    const { totalFiltered } = await listPetsUseCase.execute({
      filter: 'female',
    });

    expect(totalFiltered).toEqual(4);
  });
});
