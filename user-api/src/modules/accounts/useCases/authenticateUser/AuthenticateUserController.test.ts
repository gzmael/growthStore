/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Authenticate User Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('Should be able to authenticate a User', async () => {
    await request(app).post('/accounts').send({
      name: 'Name',
      email: 'email@email.com',
      password: 'asdqwe123',
      password_confirmation: 'asdqwe123',
    });

    const response = await request(app).post('/sessions').send({
      name: 'Name',
      email: 'email@email.com',
      password: 'asdqwe123',
    });

    expect(response.body).toHaveProperty('token');
  });

  it('Should not be able to authenticate a invalid User', async () => {
    const response = await request(app).post('/sessions').send({
      name: 'Name',
      email: 'invalid@email.com',
      password: 'qwe123',
    });

    expect(response.status).toEqual(401);
  });
});
