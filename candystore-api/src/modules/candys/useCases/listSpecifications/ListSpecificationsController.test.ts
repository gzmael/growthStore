/* eslint-disable import/no-extraneous-dependencies */
import faker from 'faker';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

interface ISpecification {
  name: string;
  description: string;
}

const dataAttributesMap: ISpecification[] = [
  { name: 'Color', description: 'Black' },
  { name: 'Color', description: 'Blue' },
  { name: 'Type', description: 'Caramels' },
  { name: 'Type', description: 'Chocolate' },
  { name: 'Size', description: 'Small' },
  { name: 'Size', description: 'Medium' },
  { name: 'Flavors', description: 'Banana' },
  { name: 'Flavors', description: 'Coffe' },
];

describe('List Specifications Controller', () => {
  beforeAll(async () => {
    let candy_id = v4();
    connection = await createConnection();
    await connection.runMigrations();

    // Seeds Attributes
    dataAttributesMap.forEach(async ({ description, name }: ISpecification) => {
      await connection.query(
        `INSERT INTO specifications (public_id, name, description) 
        VALUES ('${v4()}', '${name}', '${description}')`,
      );
    });

    await connection.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=1');`,
    );

    await connection.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Black'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Chocolate'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Medium'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Coffe'`);

    candy_id = v4();
    await connection.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=2');`,
    );

    await connection.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Black'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Chocolate'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Medium'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Coffe'`);

    candy_id = v4();
    await connection.query(
      `INSERT INTO candys (public_id, name, price, brand, description, rating,  photo) 
        VALUES ('${candy_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        10,
        300,
        2,
      )}, '${faker.name.firstName()}','description...', 
        ${faker.finance.amount(3, 5, 1)}, 
        'https://loremflickr.com/500/500/candy/all?lock=2');`,
    );

    await connection.query(`
    insert into candys_specifications select c.id ,s.id 
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Black'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Caramels'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Medium'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = 'Coffe'`);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to list all Specifications', async () => {
    const response = await request(app).get('/specifications');

    expect(response.body).toHaveLength(5);
  });
});
