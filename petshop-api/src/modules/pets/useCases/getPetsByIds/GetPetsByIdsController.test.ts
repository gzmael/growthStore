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
  { name: 'Color', description: 'White' },
  { name: 'Color', description: 'Caramels' },
  { name: 'Color', description: 'Brown' },
  { name: 'Category', description: 'Apartment Living' },
  { name: 'Category', description: 'Family' },
  { name: 'Category', description: 'Guard' },
  { name: 'Size', description: 'Small' },
  { name: 'Size', description: 'Medium' },
  { name: 'Size', description: 'Big' },
  { name: 'Level To Train', description: 'Easy' },
  { name: 'Level To Train', description: 'Hard' },
  { name: 'Energy Level', description: 'Low' },
  { name: 'Energy Level', description: 'High' },
  { name: 'Tolerates Weather', description: 'Cold' },
  { name: 'Tolerates Weather', description: 'Hot' },
  { name: 'Tolerates Weather', description: 'No' },
];

const colors = ['Black', 'White', 'Caramels', 'Brown'];
const category = ['Apartment Living', 'Family', 'Gummies', 'Hard Candies'];
const sizes = ['Small', 'Medium', 'Big'];
const level = ['Easy', 'Hard'];
const weather = ['Cold', 'Hot', 'No'];

const idsLists: string[] = [];

describe('List Pets Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    // Seeds Attributes
    dataAttributesMap.forEach(async ({ description, name }: ISpecification) => {
      await connection.query(
        `INSERT INTO specifications (public_id, name, description) 
        VALUES ('${v4()}', '${name}', '${description}')`,
      );
    });

    let pet_id = v4();
    idsLists.push(pet_id);
    await connection.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=1');`,
    );

    await connection.query(`
    insert into pets_specifications select c.id ,s.id 
from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    await connection.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()}, 
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=2');`,
    );

    await connection.query(`
    insert into pets_specifications select c.id ,s.id 
from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);

    pet_id = v4();
    idsLists.push(pet_id);
    await connection.query(
      `INSERT INTO pets (public_id, name, price, breed, gener, vaccinated,  photo) 
        VALUES ('${pet_id}', '${faker.commerce.productName()}', ${faker.finance.amount(
        600,
        2000,
        2,
      )}, '${faker.commerce.productName()}','${
        faker.datatype.boolean() ? `female` : `male`
      }', 
        ${faker.datatype.boolean()},  
        'https://loremflickr.com/500/500/dog,cat,pet/all?lock=3');`,
    );

    await connection.query(`
    insert into pets_specifications select c.id ,s.id 
from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      colors[Math.floor(Math.random() * colors.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      category[Math.floor(Math.random() * category.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      sizes[Math.floor(Math.random() * sizes.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      level[Math.floor(Math.random() * level.length)]
    }'`);

    await connection.query(`
        insert into pets_specifications select c.id ,s.id 
    from pets c, specifications s where c.public_id = '${pet_id}' and s.description = '${
      weather[Math.floor(Math.random() * weather.length)]
    }'`);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to list all Pets', async () => {
    const ids = idsLists.map(id => `ids[]=${id}`).join('&');
    const response = await request(app).get(`/pets/list?${ids}`);

    expect(response.body).toHaveLength(2);
  });
});
