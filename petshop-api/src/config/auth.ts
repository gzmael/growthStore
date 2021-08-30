export default {
  jwt: {
    secret_token:
      process.env.SECRET_TOKEN ||
      '9E70B9EE531672CA72E9A9DC2AB8ED39F106CDAD2E11F5A8001DDC3A4D215B62',
    expires_in_token: process.env.EXPIRE_TOKEN || '15min',
    secret_refresh_token:
      '6194ebcd6101f940ce9da58ae8dadb0634d8bd80874c4d1b947b7e85b6c93b7a',
    expires_in_refresh_token: process.env.EXPIRE_REFRESH_TOKEN || '30d',
    expires_refresh_token_days: process.env.REFRESH_TOKEN_DAYS || 30,
  },
};
