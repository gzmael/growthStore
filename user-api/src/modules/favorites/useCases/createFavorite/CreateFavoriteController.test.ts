/* eslint-disable import/no-extraneous-dependencies */
import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create Favorite Controller', () => {
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

  it('Should be able to create a Favorite', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'teste@test.com',
      password: 'asdqwe123',
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post('/favorites')
      .set('Authorization', `Bearer ${token}`)
      .send({
        source_type: 'petshop',
        source_id: v4(),
      });

    expect(response.body).toHaveProperty('id');
  });

  it('Should not be able to create a Favorite with a invalid source_id', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'teste@test.com',
      password: 'asdqwe123',
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .post('/favorites')
      .set('Authorization', `Bearer ${token}`)
      .send({
        source_type: 'petshop',
        source_id: 'non-uuid',
      });

    expect(response.status).toEqual(400);
  });
});
