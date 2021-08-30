/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import { Connection } from 'typeorm';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

describe('Create User Controller', () => {
  beforeAll(async () => {
    connection = await createConnection();
    await connection.runMigrations();
  });

  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });

  it('should be able to create a new User', async () => {
    const response = await request(app).post('/accounts').send({
      name: 'Name',
      email: 'teste@test.com',
      password: 'asdqwe123',
      password_confirmation: 'asdqwe123',
    });

    expect(response.body).toHaveProperty('id');
  });

  it('Should not be able to create a new User with email already in use', async done => {
    request(app)
      .post('/accounts')
      .send({
        name: 'Name',
        email: 'teste@test.com',
        password: 'asdqwe123',
        password_confirmation: 'asdqwe123',
      })
      .expect({ message: 'User already exists' })
      .expect(400, done);
  });

  it('Should not be able to create a new User with small password', async () => {
    const response = await request(app).post('/accounts').send({
      name: 'Name',
      email: 'teste2@test.com',
      password: 'as',
      password_confirmation: 'as',
    });

    expect(response.body.message).toEqual('Validation failed');
  });

  it('Should not be able to create a new User with invalid email', async () => {
    const response = await request(app).post('/accounts').send({
      name: 'Name',
      email: 'teste.@ag',
      password: 'asdqwe123',
      password_confirmation: 'asdqwe123',
    });

    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual('Validation failed');
  });

  it('Should not be able to create a new User with wrong password confirmation', async () => {
    const response = await request(app).post('/accounts').send({
      name: 'Name',
      email: 'teste.@ag',
      password: 'asdqwe123',
      password_confirmation: 'asdqwe123',
    });

    expect(response.status).toEqual(400);
    expect(response.body.message).toEqual('Validation failed');
  });
});
