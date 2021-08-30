/* eslint-disable import/no-extraneous-dependencies */
import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('List Favorites Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();

    const hashPass = await hash('asdqwe123', 8);
    const id = v4();

    await connection.query(`
    INSERT INTO USERS(id, name, email, password, created_at)
    VALUES ('${id}', 'teste', 'teste@test.com', '${hashPass}','now()')`);
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to list all Favorites', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'teste@test.com',
      password: 'asdqwe123',
    });

    const { token } = responseToken.body;

    await request(app)
      .post('/favorites')
      .set('Authorization', `Bearer ${token}`)
      .send({
        source_type: 'petshop',
        source_id: v4(),
      });

    await request(app)
      .post('/favorites')
      .set('Authorization', `Bearer ${token}`)
      .send({
        source_type: 'candystore',
        source_id: v4(),
      });

    await request(app)
      .post('/favorites')
      .set('Authorization', `Bearer ${token}`)
      .send({
        source_type: 'petshop',
        source_id: v4(),
      });

    const response = await request(app)
      .get('/favorites')
      .set('Authorization', `Bearer ${token}`);

    expect(response.body).toHaveLength(3);
  });
});
