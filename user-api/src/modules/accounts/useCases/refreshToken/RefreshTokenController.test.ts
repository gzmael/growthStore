/* eslint-disable import/no-extraneous-dependencies */
import { hash } from 'bcryptjs';
import request from 'supertest';
import { Connection } from 'typeorm';
import { v4 } from 'uuid';

import { app } from '@shared/infra/http/app';
import createConnection from '@shared/infra/typeorm';

let connection: Connection;

interface IResponseSession {
  user: {
    name: string;
    email: string;
    avatar_url: string | null;
  };
  token: string;
  refresh_token: string;
}

describe('Refresh Token Controller', () => {
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

  it('Should be able to refresh a Token', async () => {
    const response = await request(app).post('/sessions').send({
      email: 'teste@test.com',
      password: 'asdqwe123',
    });

    const { refresh_token } = response.body as IResponseSession;

    const refreshResponse = await request(app)
      .post('/sessions/refresh-token')
      .send({
        token: refresh_token,
      });

    expect(refreshResponse.body).toHaveProperty('token');
    expect(refreshResponse.body.refresh_token === refresh_token).toBe(true);
  });

  it('Should not be able to refresh a invalid Refresh Token', async () => {
    const response = await request(app).post('/sessions').send({
      name: 'Name',
      email: 'email@email.com',
      password: 'asdqwe123',
    });

    const { token } = response.body as IResponseSession;

    const refreshResponse = await request(app)
      .post('/sessions/refresh-token')
      .send({
        token,
      });

    expect(refreshResponse.status).toEqual(401);
  });
});
