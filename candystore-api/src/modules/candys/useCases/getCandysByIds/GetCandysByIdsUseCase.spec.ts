import { FakeCandysRepository } from '@modules/candys/repositories/fakes/FakeCandysRepository';

import { GetCandysByIdsUseCase } from './GetCandysByIdsUseCase';

let getCandysByIdsUseCase: GetCandysByIdsUseCase;
let fakeCandysRepository: FakeCandysRepository;

describe('List Candys by IDs', () => {
  beforeEach(() => {
    fakeCandysRepository = new FakeCandysRepository();
    getCandysByIdsUseCase = new GetCandysByIdsUseCase(fakeCandysRepository);
  });

  it('Should be able to list candys by IDs', async () => {
    const candy1 = await fakeCandysRepository.create({
      name: `Candy 1`,
      price: 10,
      brand: `Marca 1`,
      description: `Descrição`,
      rating: 5,
      photo: `image`,
    });

    await fakeCandysRepository.create({
      name: `Candy 2`,
      price: 10,
      brand: `Marca 2`,
      description: `Descrição`,
      rating: 5,
      photo: `image`,
    });

    const candy3 = await fakeCandysRepository.create({
      name: `Candy 3`,
      price: 10,
      brand: `Marca 3`,
      description: `Descrição`,
      rating: 5,
      photo: `image`,
    });

    const candys = await getCandysByIdsUseCase.execute([
      candy1.public_id,
      candy3.public_id,
    ]);
    expect(candys).toHaveLength(2);
  });
});
