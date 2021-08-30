/* eslint-disable import/no-extraneous-dependencies */
import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Get Profile Controller', () => {
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

  it('Should be able to get Profile', async () => {
    const responseToken = await request(app).post('/sessions').send({
      email: 'teste@test.com',
      password: 'asdqwe123',
    });

    const { token } = responseToken.body;

    const response = await request(app)
      .get('/accounts/me')
      .set('Authorization', `Bearer ${token}`);

    expect(response.body).toHaveProperty('id');
  });
});
