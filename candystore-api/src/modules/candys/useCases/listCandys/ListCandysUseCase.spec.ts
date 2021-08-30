import { FakeCandysRepository } from '@modules/candys/repositories/fakes/FakeCandysRepository';

import { ListCandysUseCase } from './ListCandysUseCase';

let listCandysUseCase: ListCandysUseCase;
let fakeCandysRepository: FakeCandysRepository;

describe('List All Candys', () => {
  beforeEach(() => {
    fakeCandysRepository = new FakeCandysRepository();
    listCandysUseCase = new ListCandysUseCase(fakeCandysRepository);
  });

  it('Should be able to list all candys', async () => {
    [...new Array(38)].forEach(async (item, index) => {
      await fakeCandysRepository.create({
        name: `Candy ${index}`,
        price: (index + 1) * 10,
        brand: `Marca ${(index % 3) + 1}`,
        description: `Descrição do Doce número ${index + 1}`,
        rating: index % 5,
        photo: `image-${index}`,
      });
    });

    const { total } = await listCandysUseCase.execute({});
    expect(total).toEqual(38);
  });

  it('Should be able to list candys with paginate', async () => {
    [...new Array(38)].forEach(async (item, index) => {
      await fakeCandysRepository.create({
        name: `Candy ${index}`,
        price: (index + 1) * 10,
        brand: `Marca ${(index % 3) + 1}`,
        description: `Descrição do Doce número ${index + 1}`,
        rating: index % 5,
        photo: `image-${index}`,
      });
    });

    const { totalFiltered, total } = await listCandysUseCase.execute({
      page: 4,
    });

    expect(total).toEqual(38);
    expect(totalFiltered).toEqual(8);
  });

  it('Should be able to list pets in order', async () => {
    [...new Array(38)].forEach(async (item, index) => {
      await fakeCandysRepository.create({
        name: `Candy ${index}`,
        price: (index + 1) * 10,
        brand: `Marca ${(index % 3) + 1}`,
        description: `Descrição do Doce número ${index + 1}`,
        rating: index % 5,
        photo: `image-${index}`,
      });
    });

    const { data } = await listCandysUseCase.execute({
      order: 'name',
      orderType: 'DESC',
    });

    expect(data[0].name).toEqual('Candy 9');
  });

  it('Should be able to list with pets filtered', async () => {
    [...new Array(8)].forEach(async (item, index) => {
      await fakeCandysRepository.create({
        name: `Candy ${index}`,
        price: (index + 1) * 10,
        brand: `Marca ${(index % 2) + 1}`,
        description: `Descrição do Doce número ${index + 1}`,
        rating: index % 5,
        photo: `image-${index}`,
      });
    });

    const { totalFiltered } = await listCandysUseCase.execute({
      filter: 'Marca 1',
    });

    expect(totalFiltered).toEqual(4);
  });
});
