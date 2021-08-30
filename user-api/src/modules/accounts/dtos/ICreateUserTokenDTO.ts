interface IUserTokenDTO {
  user_id: string;
  expires_date: Date;
  token: string;
  type: 'activation' | 'password' | 'refresh';
}

export { IUserTokenDTO };
