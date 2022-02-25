module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5ac9df328ce81e194d02ff775ee1aaec'),
  },
});
