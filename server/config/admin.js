module.exports = ({ env }) => ({  auth: {
    secret: env('ADMIN_JWT_SECRET', 'adminsecretkey12345'),
  },apiToken: {
    salt: env('API_TOKEN_SALT', 'NXocY3I2SUhZU3RzM3RJRnhUZ0E='),
  },  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'transfersaltkey12345'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
