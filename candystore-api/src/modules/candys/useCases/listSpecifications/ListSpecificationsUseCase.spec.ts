import { FakeSpecificationsRepository } from '@modules/candys/repositories/fakes/FakeSpecificationsRepository';

import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

let listSpecificationsUseCase: ListSpecificationsUseCase;
let fakeSpecificationsRepository: FakeSpecificationsRepository;

describe('List All Candys', () => {
  beforeEach(() => {
    fakeSpecificationsRepository = new FakeSpecificationsRepository();
    listSpecificationsUseCase = new ListSpecificationsUseCase(
      fakeSpecificationsRepository,
    );
  });

  it('Should be able to list all Specifications', async () => {
    [...new Array(38)].forEach(async (item, index) => {
      await fakeSpecificationsRepository.create({
        name: `Specification ${index}`,
        description: `Descrição ${index}`,
      });
    });

    const specifications = await listSpecificationsUseCase.execute();
    expect(specifications.length).toEqual(38);
  });
});
