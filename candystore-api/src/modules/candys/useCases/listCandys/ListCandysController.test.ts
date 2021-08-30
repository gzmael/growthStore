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

const colors = ['Black', 'Blue', 'Pink', 'Purple'];
const types = ['Caramels', 'Chocolate', 'Gummies', 'Hard Candies'];
const sizes = ['Small', 'Medium', 'Big'];
const flavors = ['Banana', 'Coffe', 'Apple', 'Cherry', 'Orange'];

describe('List Candys Controller', () => {
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
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

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
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);

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
from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      types[Math.floor(Math.random() * types.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await connection.query(`
        insert into candys_specifications select c.id ,s.id 
    from candys c, specifications s where c.public_id = '${candy_id}' and s.description = '${
      flavors[Math.floor(Math.random() * flavors.length)]
    }'`);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to list all Candys', async () => {
    const response = await request(app).get('/candys');

    expect(response.body.data).toHaveLength(3);
    expect(response.body.total).toEqual(3);
  });
});
